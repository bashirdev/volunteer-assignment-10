import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';




const EventAdded = () => {
const {title} = useParams()
  const [loggedInUSer,setLoggedInUser] = useContext(UserContext);
   const [user, setUser] = useState([]);
  //  const [itemDelete,setItemDelete] = useState([]);
   useEffect(()=>{
    fetch("http://localhost:5000/taskAdded?email=" + loggedInUSer.email)
        .then(res=>res.json())
        .then(data=>{
        setUser(data);
     })
   },[])

   const deleteItem=(id)=>{
   
     fetch(`http://localhost:5000/deleteItem/${id}`, {
     method: "DELETE",
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      // return <EventAdded />
      //only page load then deteted item
     });
 
   }
   

return (
        <>
      <div classNameName='d-flex flex-wrap'>
    
    <div className="col-md-3 col-10  mx-auto">
       <div className=" gy-4">
       <h1> {user.length} added</h1>
           {
              user.map(dat => (
                <div className="card">
              <h4>{dat.title}</h4> 
             
              <img style={{width:'200px'}} src={dat.imgUrl} alt='' /> 
              <Link to={`/eventType/${title}`}>
              <button style={{backgroundColor:'red', color:'white'}} onClick={()=>deleteItem(dat._id)}>Cencle</button></Link>
              </div>
            
            
              )
              )}
              </div>
              </div>
            
              </div>
             
        
          </>
    );
};

export default EventAdded;