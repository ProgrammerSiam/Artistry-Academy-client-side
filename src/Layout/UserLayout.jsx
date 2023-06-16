
import { Outlet } from 'react-router-dom';
import Navbar from '../SharePage/Header/Navbar';
import Footer from '../SharePage/Footer/Footer';

const UserLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[90vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserLayout;







