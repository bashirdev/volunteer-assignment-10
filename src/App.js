import React, { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams} from "react-router-dom";
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Footer from './components/Footer/Footer';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';

export const UserContext=createContext();

const App = () => {
    const [loggedInUSer, setLoggedInUser] =useState({});
    return (
        <>
        <UserContext.Provider value={[loggedInUSer,setLoggedInUser]}>
        <Router>
        <Navber />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/donation' component={Donation} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/register' component={Register} />
        <Redirect to='/' />
         </Switch>
         <Footer />
         </Router>
         </UserContext.Provider>
        </>
    );
};

export default App;