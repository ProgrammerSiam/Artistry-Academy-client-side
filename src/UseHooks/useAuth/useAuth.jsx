import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;