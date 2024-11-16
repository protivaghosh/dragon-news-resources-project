import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold my-3">Find Us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn join-item justify-start"><BsTwitter></BsTwitter>Twitter</button>
  <button className="btn join-item justify-start"><ImInstagram></ImInstagram>Instagram</button>
</div>
        </div>
    );
};

export default FindUs;