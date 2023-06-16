import React from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';

const Payment_History = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: paymenthistory = [], refetch, isLoading } = useQuery(['paymenthistory'], async () => {
        const res = await axiosSecure.get(`/paymenthistory/${user?.email}`)
        console.log(res.data)
        return res.data;
    })
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='bg-blue-400 '>
                            <th>SN</th>
                            <th>Course</th>
                            <th>Payment Amount</th>
                            <th>Instructors</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            paymenthistory.map((payment, index) =>
                                <tr key={payment._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    
                                    <td>{payment.courseName}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.instructors_Name}</td>
                                    <td>{payment.transactionId}</td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payment_History;