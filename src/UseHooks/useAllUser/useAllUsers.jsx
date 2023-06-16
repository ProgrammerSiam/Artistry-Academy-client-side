import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';

const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: alluser = [], isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log('from axios', res.data)
            return res.data.json()
        }
    })


    return [alluser, refetch, loading];
}

export default useAllUsers;