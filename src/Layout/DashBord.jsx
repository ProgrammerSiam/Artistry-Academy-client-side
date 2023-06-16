import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaMailBulk } from 'react-icons/fa';
import StudentDashbord from '../Dashbord/StudentDashbord/StudentDashbord';
import InstuctorDashbord from '../Dashbord/InstuctorDashbord/InstuctorDashbord';
import AdminDashbord from '../Dashbord/AdminDashbord/AdminDashbord';
import useAdmin from '../UseHooks/useAdmin/useAdmin';
import useinstuctor from '../UseHooks/useInstuctors/useinstuctor';
import Footer from '../SharePage/Footer/Footer';

const DashBord = () => {
    const [isAdmin] = useAdmin()
    const [isinstuctor] = useinstuctor()
    // console.log(isinstuctor)
    // console.log(isAdmin)
    return (
       <div>
         <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-12  ml-8">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] uppercase text-base-content space-y-1">
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin ? <AdminDashbord></AdminDashbord> : isinstuctor ? <InstuctorDashbord></InstuctorDashbord> : <StudentDashbord></StudentDashbord>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> HOME</NavLink></li>
                    <li><NavLink to='/'><FaMailBulk /> CONTECT</NavLink></li>


                </ul>

            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default DashBord;