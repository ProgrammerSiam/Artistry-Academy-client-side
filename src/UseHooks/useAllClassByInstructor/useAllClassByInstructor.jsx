import React from 'react';
import useAuth from '../useAuth/useAuth';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';

const useAllClassByInstructor = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: mycourse = [] } = useQuery({
        queryKey: ['mycourse', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/SelectedCourse/${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [mycourse, refetch]
};

export default useAllClassByInstructor;