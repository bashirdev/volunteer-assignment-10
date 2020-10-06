// import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { UserContext } from '../../App';

// const Checking = (props) => {
//     const {imgUrl, title, _id}= props.data;
//     const [loggedInUSer,setLoggedInUser] = useContext(UserContext);
//     const history=useHistory();
// const handleEvent=(_id,title,imgUrl)=>{
//     setLoggedInUser({...loggedInUSer, title: title, imgUrl: imgUrl})
//     history.push(`/eventType/${_id}`);
//   }
//     return (
      
//         <div>
//                <div className="col-md-3 col-10 mx-auto">
//     <div className="card" >
  
//   <img onClick={()=> handleEvent(_id, title, imgUrl)} src={imgUrl} className="card-img-top" alt="..."   />
//   <div className="card-body">
//     <h5 className="card-title ">{title}</h5>
  
//         </div>
//      </div>
//     </div>
//         </div>
//     );
// };

// export default Checking;