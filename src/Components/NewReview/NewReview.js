import React from 'react';
import '../NewReview/NewReview.css'

const NewReview = ({ comments}) => {
    const {name, image, about, rating}= comments;
    return (
        <div className='style-review '>
           <div className=''>
           <img className='review-img' src={image} alt="" />
            
           </div>
           <h2>{name}</h2>
            <p>{about}</p>
            <p>{rating}</p>
        </div>
    );
};

export default NewReview;