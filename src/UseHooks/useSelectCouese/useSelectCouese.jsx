
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';
import { useQuery } from "react-query";

const useSelectCouese = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: selectcourse = [] } = useQuery({
        queryKey: ['SelectedCourse', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/SelectedCourse/${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [selectcourse, refetch]
};

export default useSelectCouese;