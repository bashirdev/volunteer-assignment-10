import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import EventAdded from '../Blog/EventAdded';
import Common from '../Common/Common';
// import web2 from '../../Images/web2.svg';


const Event = () => {

   //  const {eventType} =useParams();
   //  const history=useHistory();
   //  const location= useLocation();

   // //  const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
   //  // const [taskAdded,setTaskAdded]=useContext(UserContext);
   //  const [user, setUser] = useState([]);
   //  const [eventAdded, seteventAdded] = useState([])

   //  useEffect(()=>{
   //  fetch(`http://localhost:5000/eventAdded`)
   //      .then(res=>res.json())
   //      .then(data=>{
        
   //         console.log(data);
           
   //         setUser(data);
         
        
   //      })
   // },[])

   // useEffect(()=>{
   //    fetch('http://localhost:5000/task?email=' + taskAdde.email )
   //        .then(res=>res.json())
   //        .then(data=>{
          
   //           console.log(data);
             
   //           setTaskAdde(data);
           
          
   //        })
   //   },[taskAdde])
  
  
    return (
        <>
    
     
           {/* <h1> {user.length} added</h1>
           {
              user.map(dat=> (
         <img src={dat.imgUrl} alt='' />

           )  )} */}
        
          <EventAdded />
        
       
        </>
    );
};

export default Event;