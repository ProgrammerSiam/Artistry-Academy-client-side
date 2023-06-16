import React from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';

const EnrolledCourse = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    
    const { data: enrolledcourse = [], refetch, isLoading } = useQuery(['enrolledcourse'], async () => {
        const res = await axiosSecure.get(`/enrolledcourse/${user?.email}`)
        // console.log(res.data)
        return res.data;
    })
    console.log(enrolledcourse)
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>Enrolled course</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='bg-blue-400 '>
                            <th>SN</th>
                            <th>Banner</th>
                            <th>Course</th>
                            <th>Instructors</th>
                            <th>Course fee</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enrolledcourse.map((enrolle , index) =>
                                <tr key={enrolle._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td><img className='w-20 h-12 rounded-md' src={enrolle.image} alt="" /></td>
                                    <td>{enrolle.name}</td>
                                    <td>{enrolle.instructors_Name}</td>
                                    <td>$ {enrolle.price}</td>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrolledCourse;