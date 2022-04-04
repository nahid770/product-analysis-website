import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mr-4 h-14 p-3 w-full bg-green-400'>
              <Link className='mr-8  font-bold' to="/">Home</Link>
              <Link className='mr-8  font-bold' to="/review">Review</Link>
              <Link className='mr-8  font-bold' to="/dashbord">Dashbord</Link>
              <Link className='mr-8  font-bold' to="/about">About</Link>
        </nav>
    );
};

export default Header;