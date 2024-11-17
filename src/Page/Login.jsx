import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
 const {userLogin, setUser} = useContext(AuthContext)
 const HandleSubmit=(e)=>{
  e.preventDefault();
  const from =e.target;
  const email=from.email.value;
  const password=from.password.value;
  console.log({email, password});
  userLogin(email, password)
  .then(result=>{
    const user=result.user;
    setUser(user);
  })
  .catch((error) => {
    alert(error.code);
  });
 }
  
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
            <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={HandleSubmit} className="card-body">
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
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        <p className='font-semibold text-center'>Dont’t Have An Account ? <Link className='text-red-600' to="/auth/register">Register</Link></p>
      </form>
    </div>
      </div>
    );
};

export default Login;