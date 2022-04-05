import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Image/img.png'
import "./Home.css"
import ReviewHook from '../../../CustomHook/ReviewHook';
import NewReview from '../../NewReview/NewReview';
const Home = () => {

  const [UserReview, setUserReview] = ReviewHook();
    return (
        <div className='body'>
          <div className='header-continer grid grid-cols-2 bg-blue-200 w-full h-full'>
          <div className='text-container mr-6 p-10' >
         <h2 className='text-5xl text-white'>Choose The Best <span className='text-green-400 laptop'>Laptop</span> For Your Work</h2>
        <p className='mt-4'> Microsoft Surface Laptop 4 15” Touch-Screen AMD Ryzen 7 Surface Edition - 8GB - 512GB Solid State Drive (Latest Model) - Matte Black</p>
        <button className='button'>Learn More</button>
          </div>
          <div className='img-container grid grid-cols-2 ml-20 pt-10 '>
        <img  src={image} alt="" />
          </div>
          </div>

          
        <div className='customer-review'>
        
        <div className=' mt-10'>
        <h2 className='text-4xl font-mono font-bold pt-10'>Customer Reviews</h2>
        </div>
       

      {
        UserReview.map(comments => <NewReview 
         
          comments={comments}
        
        ></NewReview>)
      }

        
        <Link className='mr-8 review-btn font-bold' to="/review">See All Reviews</Link>
        

        </div>

        </div>

    );
};

export default Home;