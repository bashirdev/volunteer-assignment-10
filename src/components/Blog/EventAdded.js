import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';




const EventAdded = () => {

  const [loggedInUSer,setLoggedInUser] = useContext(UserContext);
   const [user, setUser] = useState([]);
   useEffect(()=>{
    fetch("http://localhost:5000/taskAdded?email=" + loggedInUSer.email)
        .then(res=>res.json())
        .then(data=>{
        setUser(data);
     })
   },[loggedInUSer])

return (
        <>
      <div classNameName='container mb-5'>
      <div className="row">
    <div className="col-md-3 col-10 mx-auto">
       <div className=" gy-4">
       <h1> {user.length} added</h1>
           {
              user.map(dat => (
                <div className="card d-flex">
              <h4>{dat.title}</h4> 
             
              <img style={{width:'200px'}} src={dat.imgUrl} alt='' /> </div>
            
            
              )
              )}
              </div>
              </div>
              </div>
              </div>
             
        
          </>
    );
};

export default EventAdded;