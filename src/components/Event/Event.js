import React from 'react';
import Common from '../Common/Common';
import web2 from '../../Images/web2.svg';

const Event = () => {
    return (
        <>
          <Common 
           name='Welcome to About page'
            imgsrc={web2} 
             visit="/contact" 
            btnname="Contact Now" 

             />  
        </>
    );
};

export default Event;