import React from 'react';
import loca from '../assets/img/loc.png'

const TuitionCard = ({ tuition }) => {
    const { title, grade, gender, medium, duration, salary, utor, students, subject, time, location, name, mobile, email } = tuition;
    return (
        <div className="card shadow-2xl  text-black">
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p><span className='text-error font-bold'>Medium:</span> {medium}</p>
                    <p><span className='text-error font-bold'>Class:</span> {grade}</p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between'>
                    <p><span className='text-error font-bold'>Gender:</span> {gender}</p>
                    <p><span className='text-error font-bold'>Weekly:</span> {duration}</p>
                    <p><span className='text-error font-bold'>Time:</span> {time}</p>

                </div>
                <p><span className='text-error font-bold'>Subjects:</span> {subject}</p>


                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex items-center'>
                        <img className='w-10' src={loca} alt="" />
                        <p className='text-3xl'>{location}</p>

                    </div>
                    <div className="card-actions justify-center lg:justify-end mt-3">
                        <button className="btn btn-error text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionCard;