import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvaiders/AuthProvaider';
import useAdmin from '../UseHooks/useAdmin/useAdmin';

const AdminRoutes = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    if (isAdminLoading) {
        return <div className='flex justify-center items-center'>

            <h2 className='text-3xl  font-bold'>Loading Admin Page ...</h2>
        </div>
    }
    if (isAdmin) {
        return children
    }
    return <Navigate to='/'></Navigate>
};

export default AdminRoutes;