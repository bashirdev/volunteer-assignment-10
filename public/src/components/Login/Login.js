import React, { useContext } from 'react';
import {UserContext} from '../../App';
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Event from '../Event/Event';
import Register from '../Register/Register';
const Login = () => {
    const [loggedInUSer, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

 if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
 }
 const provider = new firebase.auth.GoogleAuthProvider();
const handleGoogleLogIn=()=>{
    firebase.auth().signInWithPopup(provider).then((result)=> {
        const {displayName, email} = result.user;
        const signedInuser ={name: displayName, email}
        setLoggedInUser(signedInuser);
        history.replace(from);
        //  console.log(result);
      }).catch((error) => {
        
      });
}
   
    return (
        <div >
      <div style={{textAlign:'center'}}>
        
          <p > <Link> <button onClick={handleGoogleLogIn} > Sign in with Google </button> </Link></p></div> 
          <div>
             
          </div>
        </div>
    );
};

export default Login;