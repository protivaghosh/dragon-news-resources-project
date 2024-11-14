import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div>
                <button className='btn'><FaGoogle />Login with Google</button>
                <button className='btn'><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;