import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import web from '../../Images/web.svg';
const Common = ({da}) => {
    console.log(da);
    const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
    return (
        <>
      {loggedInUSer.name}
        </>
    );
};

export default Common;

{/* <section id="header" className="d-flex align-items-center">
                
<div className='container-fluid '>
<div className='row'>
    <div className='col-10 mx-auto'>
    <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>
            {props.name}  
            <strong className="brand-name"> Bashir Web </strong>
            </h1>
            <h2 className="my-3">We are the team of web developper</h2>
            <div className='mt-3'>
                <NavLink to={props.visit} className="btn-get-started " >
              {props.btnname}
                </NavLink>
            </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
        </div>
        </div>
    </div>
</div>
</div>
</section> */}