import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full'>
            <h2 className='text-4xl font-mono mt-5 '>Wellcome To My Blog </h2>

           <div className='ml-20 mt-5'>
            <h3 className='text-2xl font-semibold text-left'>What is context API?</h3>
            <p className='text-left mt-1'>Ans: The Context API is a React structure whice gives you the ability to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>

            <h3 className='text-2xl font-semibold text-left mt-4'>What is semantic tag?</h3>
            <p className='text-left mt-1'>Ans: The tags who provides information about the conntents of those tags that goes beyond just how they look on a page is called semantic tag. Some semantic tags are: header, main, artice, aside, footer</p>
            
           </div>
        </div>
    );
};

export default Blogs;