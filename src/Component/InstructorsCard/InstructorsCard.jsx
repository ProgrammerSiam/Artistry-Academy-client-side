import React from 'react';
import { Link } from 'react-router-dom';

const InstructorsCard = ({ Instructor }) => {
    const { image, name, email, classes, _id } = Instructor;
    // { classes.map(classI => console.log(classI)) }
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <figure><img className='w-96 h-80 rounded-md' src={image} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">Instructor : {name}</h2>
                <h2 className="">Email : {email}</h2>
                <p> Class of {name} :  {classes.length}</p>
                <p>Name Of Class : {classes.map((InstructorClass, index) => <p> {index + 1} . {InstructorClass.name}</p>)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/${_id}`}><button className="btn btn-primary">See Classes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;