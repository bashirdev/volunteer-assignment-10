import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Common from '../Common/Common';
// import web2 from '../../Images/web2.svg';


const Event = () => {

    const {eventType} =useParams();
    const history=useHistory();
    const location= useLocation();

    const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
    // const [taskAdded,setTaskAdded]=useContext(UserContext);
    const [taskAdde, setTaskAdde] = useState([])

    useEffect(()=>{
    fetch('http://localhost:5000/task?email=' + taskAdde.email )
        .then(res=>res.json())
        .then(data=>{
        
           console.log(data);
           
           setTaskAdde(data);
         
        
        })
   },[taskAdde])
  
  
    return (
        <>
     {/* {
        taskAdde.map((da)=> <Common da={da} /> )
     } */}
     
           <h1> {loggedInUSer.name}</h1>
        
           <h3>{loggedInUSer.title}</h3>
           <img src={loggedInUSer.imgUrl} alt='' />
        </>
    );
};

export default Event;