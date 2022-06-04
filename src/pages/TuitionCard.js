import React from 'react';
import loca from '../assets/img/loc.png'

const TuitionCard = ({ tuition }) => {
    const { title, grade, gender, medium, duration, salary, utor, students, subject, time, location, name, mobile, email } = tuition;
    return (
        <div class="card shadow-2xl  text-black">
            <div class="card-body">
                <h2 class="text-2xl font-bold">{title}</h2>
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


                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img className='w-10' src={loca} alt="" />
                        <p className='text-3xl'>{location}</p>

                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-error text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionCard;