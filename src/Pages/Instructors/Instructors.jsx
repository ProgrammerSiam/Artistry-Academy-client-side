import React, { useEffect, useState } from 'react';
import InstructorsCard from '../../Component/InstructorsCard/InstructorsCard';
import { useQuery } from "react-query";
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { Fade, Hinge } from 'react-awesome-reveal';


const Instructors = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: allInstructors = [], refetch } = useQuery(['allInstructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        console.log(res.data)
        return res.data;
    })

    // console.log("instructors", allInstructors)
    return (
        <div className='mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-12'>
                {
                    allInstructors.map(instructors =>

                        <Fade>
                            <div key={instructors._id} className="card  card-compact bg-slate-300 w-96 h-96  shadow-xl">
                                <figure><img className='w-96 h-80 rounded-md' src={instructors.userProfile} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title">Instructor : {instructors.name}</h2>
                                    <h2 className=""> Instructor Email: {instructors.email}</h2>
                                    {/* <button className="btn btn-primary">Select class</button> */}
                                </div>
                            </div>
                        </Fade>


                    )
                }
            </div>
        </div>
    );
};

export default Instructors;