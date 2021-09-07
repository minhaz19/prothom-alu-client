// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpjTEC-ugfDMUq3-WiNxBI5ntd0npnc9A",
    authDomain: "prthom-alu.firebaseapp.com",
    projectId: "prthom-alu",
    storageBucket: "prthom-alu.appspot.com",
    messagingSenderId: "487601015840",
    appId: "1:487601015840:web:f52fbf5fc3cd640fc08045"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;