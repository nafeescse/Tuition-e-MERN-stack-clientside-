import React from 'react';

const TutorsCard = ({ tutor }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl m-5">
            <figure className='w-1/4'><img src={tutor.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{tutor.name}</h2>
                <p><span className='text-error font-bold'> Qualification: </span>{tutor.degree}</p>
                <p><span className='text-error font-bold'> Salary: </span>{tutor.salary}</p>
                <p><span className='text-error font-bold'> Area: </span>{tutor.location}</p>
                <p><span className='text-error font-bold'> Subject: </span>{tutor.subject}</p>

                <button className="btn btn-error text-white">Details</button>

            </div>
        </div>
    );
};

export default TutorsCard;