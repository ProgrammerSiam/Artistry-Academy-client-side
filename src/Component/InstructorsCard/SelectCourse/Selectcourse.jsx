import React from 'react';
import useSelectCouese from '../../../UseHooks/useSelectCouese/useSelectCouese';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Selectcourse = ({ course, index, handleRemovecourse, refetch }) => {
    const { image, name, instructors_Name, price, _id, payment_status } = course;



    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td><img className='w-20 h-12 rounded-md' src={image} alt="" /></td>
            <td>{name}</td>
            <td>{instructors_Name}</td>
            <td>$ {price}</td>
            <td><button className='gradient-btn' onClick={() => handleRemovecourse(_id)}>Unselect</button></td>
            <td>
                <Link to='/dashbord/payment' state={course}>
                    <button className='gradient-btn w-20'>Pay</button>
                </Link>
            </td>

        </tr>
    );
};

export default Selectcourse;