import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvaiders/AuthProvaider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(user)
    if (loading) {
        return <div className='flex justify-center items-center'>

            <h2 className='text-3xl  font-bold'>Loading ...</h2>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;