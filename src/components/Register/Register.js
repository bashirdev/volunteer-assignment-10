import React, { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
      
        fullname:'',
        phone:'',
        email:'',
        message:'',

    });

    const InputEvent =(event)=>{
          const {name, value} = event.target;
          setFormData((preVal)=> {
              return{
                  ...preVal,
                  [name] : value,
              };
          });
    };

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Name: ${formData.fullname} 
         Mobile Number: ${formData.phone} 
         Email: ${formData.email} 
        Message: ${formData.message} `)
        
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
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" 
                    name="fullname"
                    value={formData.fullname}
                    onChange={InputEvent}
                    placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" 
                    name="phone"
                    value={formData.phone}
                    onChange={InputEvent}
                    placeholder="MObile Number" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                    name="email"
                    value={formData.email}
                    onChange={InputEvent}
                    placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" 
                    name="message"
                    value={formData.message}
                    onChange={InputEvent}
                     rows="3">

                     </textarea>
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