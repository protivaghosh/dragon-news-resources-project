import React from 'react';
import SocialLogin from '../Components/SocialLogin';
import FindUs from '../Components/FindUs';

const RightNav = () => {
    return (
        <div className="space-y-5">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        </div>
    );
};

export default RightNav;