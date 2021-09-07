import React, { useState, useEffect, useContext, createContext } from "react";
import { Route, useHistory, useLocation } from "react-router";
import firebase from "./firebase";
import Login from "../components/Login/Login";
import Preloader from "./Preloader";
const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const PrivateRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}) => {
  const { user, loginStatus } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        loginStatus.status === "pending" ? (
          <Preloader />
        ) : user ? (
          <Component {...props} />
        ) : (
          <Login />
        )
      }
    />
  );
};

function useProvideAuth() {
  const [user, setUser] = useState();
  const [loginStatus, setLoginStatus] = useState({
    status: "idle",
    error: null,
  });

  const formatUser = (user) => ({
    email: user.email,
    name: user.displayName,
    // provider: user.providerData[0].providerId,
    // photoUrl: user.photoURL,
    // uid: user.uid,
  });
 

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        const formattedUser = formatUser(response.user);
        // console.log(formattedUser);
        setUser(formattedUser);
        setLoginStatus({ status: "resolved", error: null });
        return formattedUser;
      })
      .catch((err) => {
        setUser(null);
        setLoginStatus({ status: "resolved", error: err.message });
      });
  };


  const [newUser, setNewUser] = useState(false);
  const [client, setClient] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
  });

// console.log(user);

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'name') {
      isFieldValid = e.target.value;
    }
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const passwordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = passwordValid && passwordHasNumber;

    }
    if (isFieldValid) {
      const newUserInfo = { ...client };
      newUserInfo[e.target.name] = e.target.value;
      setClient(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    // console.log(e.email);
    e.preventDefault();
    if (newUser && client.email && client.password) {
      return firebase
      .auth()
      .createUserWithEmailAndPassword(client.email,client.password)
        .then((res) => {
          const newUserInfo = { ...client };
          newUserInfo.error = '';
          setClient(newUserInfo);
          updateUserName(client.name)
          const { displayName, email } = res.client;
          const signedInUser = { displayName, email }
          const formattedUser = formatUser(signedInUser);
          setUser(formattedUser);
          setLoginStatus({ status: "resolved", error: null });
          return formattedUser;
          // history.replace(from);
        })
        .catch((error) => {
            setUser(null);
            setLoginStatus({ status: "resolved", error: error.message });
        });
    }
    if (!newUser && client.email && client.password) {
      return firebase
      .auth()
      .signInWithEmailAndPassword(client.email,client.password)
        .then((res) => {
          const newUserInfo = { ...client };
          newUserInfo.error = '';
          setClient(newUserInfo);
          const { displayName, email } = res.client;
          const signedInUser = {displayName, email }
          const formattedUser = formatUser(signedInUser);
          console.log(formattedUser);
          setUser(formattedUser);
          setLoginStatus({ status: "resolved", error: null });
          return formattedUser;
          // history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...client };
          newUserInfo.error = error.message;
          setClient(newUserInfo);
        });
    }
  }
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log("update Successfuly")
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setLoginStatus({ status: "idle", error: null });
      });
  };

  useEffect(() => {
    setLoginStatus({ status: "pending", error: null });
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const formattedUser = formatUser(user);
        setUser(formattedUser);
        setLoginStatus({ status: "resolved", error: null });
      } else {
        setLoginStatus({ status: "idle", error: null });
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    client,
    newUser,
    setNewUser,
    loginStatus,
    signInWithGoogle,
    handleSubmit,
    handleBlur,
    signOut,
  };
}