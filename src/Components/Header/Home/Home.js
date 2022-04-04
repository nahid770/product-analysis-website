import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Image/img.png'
import "./Home.css"

const Home = () => {
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

          
          <div className='customer-review  '>
        
        <div className=' mt-10'>
        <h2 className='text-4xl font-mono font-bold pt-10'>Customer Reviews</h2>
        </div>

        <div className="comment">
        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Gevorg Martirosyan</p>
        <p> I'm buying Surface Laptops almost every year because my sister and girlfriend are       "borrowing" these laptops from me and never return them :D</p>
        <span>Rating: 4.5</span>
        
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Store Mgr</p>
        <p> This is my third Surface and Im really pleased. The first lasted me 5 years and I loved it.</p>
        <span>Rating: 4.4</span>
        
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Ryan Pope</p>
        <p> I'm homebound for ~6 months with 2 broken ankles; the sporadic function of the Chromebook. </p>
        <span>Rating: 4.9</span>
      
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>	Loucardinal</p>
        <p>  The camera can be improved. It would also be nice to have another camera on the cover like a Surface Pro.  I really like this extra screen space.</p>
        <span>Rating: 5</span>
      
        </div>
        

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Kim</p>
        <p>I really like the size and style. The keyboard side has this really nice suede-like material that takes the style value up a notch. Really easy to work with.</p>
        <span>Rating: 4.8</span>
        
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>	Curtis</p>
        <p>  I could be wrong, but it was hard to find a Surface Laptop 4 on short notice and this one seems to have fit the bill</p>
        <span>Rating: 4.6</span>
        </div>
        </div>
        
        <Link className='mr-8 review-btn font-bold' to="/review">See All Reviews</Link>
        

        </div>

        </div>

    );
};

export default Home;