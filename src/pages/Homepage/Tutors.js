import React, { useEffect, useState } from 'react';
import TutorsCard from '../TutorsCard';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Tutors = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetch('https://amartuition777.herokuapp.com/all-tutors')
            .then(res => res.json())
            .then(data => setTutors(data))

    }, [])
    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl text-error font-bold my-3'>Available Tutors({tutors.length})</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {
                    tutors.slice(1, 7).map(tutor => <TutorsCard key={tutor._id} tutor={tutor}></TutorsCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/tutors'>
                    <button className="btn btn-error text-white">See More <FaArrowAltCircleRight className='ml-2' /></button>
                </Link>
            </div>
        </div>
    );
};

export default Tutors;