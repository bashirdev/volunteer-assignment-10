import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Card = (props) => {
  const {imgsrc, title}= props.data;

    return (
        <>
        
     <div className="col-md-3 col-10 mx-auto">
    <div className="card" >
    <Link to='/login'>
  <img  src={imgsrc} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title ">{title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">
    Go somewhere
          </NavLink> */}
        </div>
     </div>
    </div>
  </>
    );
};

export default Card;