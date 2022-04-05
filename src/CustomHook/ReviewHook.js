import { useEffect, useState } from 'react';

const ReviewHook = () => {
    const [UserReview, setUserReview]= useState([]);
    useEffect(()=> {

        fetch("Review.json") 
        .then( res=>res.json())
        .then(data=> setUserReview(data))
    }, [])

    return (
        [UserReview, setUserReview]
    );
};

export default ReviewHook;