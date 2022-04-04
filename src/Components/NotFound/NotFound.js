import React from 'react';
import image from '../Header/Image/404.jpg'
import '../NotFound/NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found w-full text-center'>
          <img src={image} alt="" /> 
        </div> 
    ); 
};

export default NotFound; 