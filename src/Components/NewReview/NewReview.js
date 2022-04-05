import React from 'react';
import '../NewReview/NewReview.css'

const NewReview = ({ comments}) => {
    const {name, image, about, rating}= comments;
    return (
        
        <div >

          <img className='review-img' src={image} alt="" />
           <h2>{name}</h2>
            <p>{about}</p>
            <p className='rating'>{rating}</p>
          
        </div>
    );
};

export default NewReview;