import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Layout-Component/LeftNavbar';
import RightNav from '../Layout-Component/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
             </header>
            <nav className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
            <aside className="col-span-3">
                <LeftNavbar></LeftNavbar>
                </aside>
            <section className='col-span-6'>
            <Outlet></Outlet>
            </section>
            <aside className="col-span-3"><RightNav></RightNav></aside>

            </main>
        </div>
    );
};

export default HomeLayout;