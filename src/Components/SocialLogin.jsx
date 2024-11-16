import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className='space-y-2'>
                <button className='btn w-full'><FaGoogle />Login with Google</button>
                <button className='btn w-full'><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;