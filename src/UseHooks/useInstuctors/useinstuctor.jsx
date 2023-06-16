import { useQuery } from "react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useinstuctor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // console.log('axiosSecure' , axiosSecure);

    const { data: isinstuctor, isLoading: isinstuctorLoading } = useQuery({
        queryKey: ['isinstuctor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instuctor/${user?.email}`);
            // console.log('is instuctor response', res)
            return res.data.instructor;
        }
    })
    return [isinstuctor, isinstuctorLoading]
};

export default useinstuctor;