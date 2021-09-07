import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/auth';

const Login = () => {
    const { signInWithGoogle, handleBlur, handleSubmit, user, newUser, setNewUser, client } = useAuth();
    

    return (
        <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5 bgColor">
            <form action="" onSubmit={handleSubmit}>
              { newUser && <div className="form-group">
                <label htmlFor="">User Name</label>
                <input type="text" onBlur={handleBlur} className="form-control"  name="name" placeholder="Enter Your Name" required/>
              </div>}
              <div className="form-group">
                <label htmlFor="">Email Address</label>
                <input type="text" onBlur={handleBlur} className="form-control" name="email" placeholder="Enter Your Email Address" required/>
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" onBlur={handleBlur} className="form-control" name="password" placeholder="Enter your password [password must contain number and more then 6 letters]" required/>
              </div>
              <div className="form-group">
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser )} id="" />
                <label htmlFor="newUser" className="text-danger ms-1">Open a new account</label>
                <br />
                {/* { !newUser && <label htmlFor="">*For admin use <span className="text-primary">minhaz123@gmail.com</span> as a mail and <span className="text-primary">minhaz123</span> as a password</label>} */}
              </div>
              <div className="form-group mt-3">
                <input type="submit" className="btn btn-primary text-white" value={newUser ? 'Create new account' : 'Login'} />
              </div>
            </form>
            {/* <p style={{color:"red"}}>{user.error}</p> */}
            <hr />
            <div className="from-group mt-3 d-flex justify-content-center ">
              <button className="btn btn-primary text-white rounded-pill" onClick={signInWithGoogle}><img style={{ width: '25px' }} src="https://raw.githubusercontent.com/minhaz19/dream-maker-client/86a0eddc44cb60a1d79775d2f2f4d15bb43a34dc/src/images/google-plus.png" alt="" /> Google Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;