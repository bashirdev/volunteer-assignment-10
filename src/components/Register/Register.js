import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {

    const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
    const InputEvent =(event)=>{
        setLoggedInUser({...loggedInUSer, ...taskAdded, [event.target.name]: event.target.value}) ;
         
    };

    console.log(loggedInUSer);

    const formSubmit = (e)=>{
        e.preventDefault();
     fetch('http://localhost:5000/registerForTask/',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(loggedInUSer) 
     })
    .then(res=>res.json())
     .then(data=>console.log(data))
     
        
    }
    return (
        <>
           <div className="my-5">
               <h1 className="text-center">Register as a Volunteer</h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                       <div class="mb-3">
                    <label  class="form-label">Full Name</label>
<input type="text" class="form-control"  name="fullname" value={taskAdded.name}
                    onChange={InputEvent}
                    placeholder="Your Name" required />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1"  name="email"
                    value={taskAdded.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"  required />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Date</label>
 <input type="date" class="form-control" id="exampleFormControlInput1"  name="date" required
                    onChange={InputEvent}
                    placeholder="date" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title </label>
 <input type="text" class="form-control" id="exampleFormControlInput1"  name="title"
                   value={loggedInUSer.title}
                    onChange={InputEvent}
                    placeholder={loggedInUSer.title} required />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
 <input type="text" class="form-control" id="exampleFormControlInput1"  name="description"
                    onChange={InputEvent}
                    placeholder="description" required />
                    </div>  
                    
                    
                <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
                       </form>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Register;