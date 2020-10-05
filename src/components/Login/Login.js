import React, { useContext } from 'react';
import {UserContext} from '../../App';
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Event from '../Event/Event';
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
         console.log(result);
      }).catch((error) => {
        
      });
}
   
    return (
        <div>
      
         <button onClick={handleGoogleLogIn} > Sign in with email </button> 
           <p>Don't have an account? <Link to='/register'>Create an acccount</Link></p>
          
        </div>
    );
};

export default Login;