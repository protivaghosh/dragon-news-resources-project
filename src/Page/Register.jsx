import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
const {createNewsUser, setUser} = useContext(AuthContext)

  const HandleSubmit=(e)=>{
   e.preventDefault()
   const from = new FormData(e.target)
   const name= from.get("name");
   const photo= from.get("photo");
   const email= from.get("email");
   const password= from.get("password");  
    console.log({name, photo, email, password});

    createNewsUser(email, password)
    .then((result)=>{
      const user=result.user
      console.log(user);
      setUser(user)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
            <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <form onSubmit={HandleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="Enter your URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
        <p className='font-semibold text-center'>Accept Term & Conditions?<Link className='text-red-600' to="/auth/login">Login</Link></p>
      </form>
    </div>
      </div>
    );
};

export default Register;