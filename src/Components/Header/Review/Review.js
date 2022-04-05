import React from 'react';
import { Link } from 'react-router-dom';
import ReviewHook from '../../../CustomHook/ReviewHook';
import NewReview from '../../NewReview/NewReview';

const Review = () => {
    const [UserReview, setUserReview] = ReviewHook();
    return (
        <div>  

       <h2 className='text-4xl font-mono font-bold pt-10'>Customer Reviews</h2>

       <div className='review-container'>
{
  UserReview.map(comments => <NewReview         
    comments={comments}       
  ></NewReview>)
} 
        </div>    
               
       

        </div>
    );
};

export default Review;