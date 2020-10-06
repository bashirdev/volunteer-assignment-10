import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Event from '../Event/Event';


const Card = (props) => {
  const {imgUrl, title, _id}= props.data;
  const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
  const history=useHistory();


const handleEvent=(_id,title,imgUrl)=>{
  setLoggedInUser({...loggedInUSer, ...taskAdded, title: title, imgUrl: imgUrl})
  history.push(`/register/${_id}`);

  
}
    return (
        <>
        
     <div className="col-md-3 col-10 mx-auto">
    <div className="card" >
  
  <img onClick={()=> handleEvent(_id, title, imgUrl)} src={imgUrl} className="card-img-top" alt=""   />
  <div className="card-body">
    <h5 className="card-title ">{title}</h5>
  
        </div>
     </div>
    </div>
  
  </>
    );
};

export default Card;

  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">
    Go somewhere
          </NavLink> */}

            {/* <Link  onClick={()=> props.HandlVolunteerEvent(props.data)}> */}