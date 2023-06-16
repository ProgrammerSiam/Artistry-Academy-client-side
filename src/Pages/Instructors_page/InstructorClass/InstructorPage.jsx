import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassList from '../../../Component/InstructorsCard/ClassList/ClassList';

const InstructorPage = () => {
    const InstructorClass = useLoaderData()
    const { classes } = InstructorClass
    console.log(InstructorClass)
    console.log(classes)
    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=' border-4 '>
                        <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 font-bold bg-opacity-30'>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Course Price</th>
                            <th>Course Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((AllClass, index) => <ClassList
                                AllClass={AllClass}
                                index={index}
                            ></ClassList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorPage;