import React from 'react';
import { Link } from 'react-router-dom';
import userLink from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between">
           <div></div>
           <div className='nav space-x-5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
           </div>
           <div className="user flex gap-2 items-center">
            <img src={userLink} alt="" />
            <button className="btn btn-neutral rounded-none">Login</button>
           </div>
        </div>
    );
};

export default Navbar;