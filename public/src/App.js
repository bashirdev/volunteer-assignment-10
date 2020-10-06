import React, { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams} from "react-router-dom";
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Footer from './components/Footer/Footer';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';

import Register from './components/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';
import Common from './components/Common/Common';

export const UserContext=createContext();

const App = () => {
    const [loggedInUSer, setLoggedInUser] =useState({});
    const [taskAdded, setTaskAdded] =useState({});

    return (
        <>
        <UserContext.Provider value={[taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser]}>
        
        <Router>
        <Navber />
        <Switch>
        <Route  path='/home'>
            <Home />
        </Route>
       <Route  path='/login'>
        <Login />
        </Route>
        <PrivateRoute  path='/register/:_id'>
        <Register />
        </PrivateRoute>
        <Route  path='/eventType/:title'>
            <Event />
        </Route>
        <Route exact path='/'>
        <Home />
        </Route>
        {/* <Redirect to='/' /> */}
         </Switch>
         <Footer />
         </Router>
    
         </UserContext.Provider>
        </>
    );
};

export default App;