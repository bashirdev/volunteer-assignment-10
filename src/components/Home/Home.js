import React from 'react';
import Card from '../Card/Card';
import FakeData from '../FakeData/FakeData';

const Home = () => {
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
           FakeData.map(data=>  <Card kay={data.id} data={data} />)
       }
            
       </div>
      </div>
    </div>
    </div>
        </>
    );
};

export default Home;