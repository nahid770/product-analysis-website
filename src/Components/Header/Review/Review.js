import React from 'react';

const Review = () => {
    return (
        <div>
           
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
        <span></span>
        
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Ryan Pope</p>
        <p> I'm homebound for ~6 months with 2 broken ankles; the sporadic function of the Chromebook I had was driving me nuts trying to get anything done or keep myself entertained at home. </p>
        <span></span>
      
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>	Loucardinal</p>
        <p>  The camera can be improved. It would also be nice to have another camera on the cover like a Surface Pro.  I really like this extra screen space.</p>
        <span></span>
      
        </div>
        

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>Kim</p>
        <p>I really like the size and style. The keyboard side has this really nice suede-like material that takes the style value up a notch. Really easy to work with.</p>
        <span></span>
        
        </div>

        <div className='first-review '>
         <p className='text-xl font-serif font-semibold '>	Curtis</p>
        <p>  I could be wrong, but it was hard to find a Surface Laptop 4 on short notice and this one seems to have fit the bill</p>
        <span></span>
        </div>
        </div>
        <button className='review-btn'>See All Reviews</button>
        

        </div>

        </div>
    );
};

export default Review;