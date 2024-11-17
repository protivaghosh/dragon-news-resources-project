import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userLink from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
const {user, logOut} = useContext(AuthContext);
console.log(user);
    return (
        <div className="flex justify-between">
           <div>{user && user.email}</div>
           <div className='nav space-x-5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
           </div>
           <div className="user flex gap-2 items-center">
            <div>
            <img src={userLink} alt="" />
            </div>
           
           
            {
                user && user?.email ?( <button onClick={logOut} className="btn btn-neutral rounded-none">LogOut</button>): (<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>)
            }
            
           </div>
        </div>
    )
};

export default Navbar;