import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full'>
            <h2 className='text-4xl font-mono mt-5 '>Wellcome To My Blog </h2>

           <div className='ml-20 mt-5'>
            <h3 className='text-2xl font-semibold text-left'> 1. What is context API?</h3>
            <p className='text-left mt-1'>Ans: The Context API is a React structure whice gives you the ability to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>

            <h3 className='text-2xl font-semibold text-left mt-4'>2. What is semantic tag?</h3>
            <p className='text-left mt-1'>Ans: The tags who provides information about the conntents of those tags that goes beyond just how they look on a page is called semantic tag. Some semantic tags are: header, main, artice, aside, footer</p>
        <h3 className='text-2xl font-semibold text-left mt-4'>3. What is the difference between inline, inline-block and block element?</h3>
        <p className='text-left mt-1'>
        <span className='text-xl font-bold'>Inline:</span> The element does not start on a new line and only occupy just the width it requires. You can't set the width or height.

        <p className='mt-1'> <span className='text-xl font-bold'>Inline-block: </span>
            It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values. </p>

        <p className='mt-1'> <span className='text-xl font-bold'>Block: </span> The element will start on a new line and occupy the full width available. And you can set width and height values.</p>

        </p>

           </div>
        </div>
    );
};

export default Blogs;