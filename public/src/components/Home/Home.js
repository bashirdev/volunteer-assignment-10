import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Card from '../Card/Card';
import Checking from '../Card/Checking';
import FakeData from '../FakeData/FakeData';

const Home = () => {
// const eventData=FakeData;
const [eventTask, setEventTask] = useState([]);
// const [taskAdded, setTaskAdded] = useContext(UserContext);

useEffect(()=>{
     fetch('http://localhost:5000/volunteer')
     .then(res=>res.json())
     .then(data=>setEventTask(data))
},[])
// const HandlVolunteerEvent=(task)=>{

// const newTask=[...taskAdded, task]
// console.log(newTask);
// setEventTask(newTask);
// setTaskAdded(newTask);

// }
    return (
        <>
          <div className="my-5">
               <h1 className="text-center">I GROW BY HELPING IN NEED.</h1>
        <div className="d-flex justify-content-md-center m-3" style={{maxWith:'300px'}}>
        <input  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
          </div>
 <div classNameName='container-fluid mb-5'>
    <div className='row'>
        <div className='col-10 mx-auto'>
       <div className="row gy-4">
       {
           eventTask.map(data=> <Card kay={data._id} data={data}  />  )
       }
            
       </div>
      </div>
    </div>
    </div>
        </>
    );
};

export default Home;