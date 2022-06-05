import React, { useEffect, useState } from 'react';
import TutorsCard from '../pages/TutorsCard';
const AllTutors = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetch('https://amartuition777.herokuapp.com/all-tutors')
            .then(res => res.json())
            .then(data => setTutors(data))

    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl text-error font-bold my-3'>Available Tutors({tutors.length})</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {
                    tutors.map(tutor => <TutorsCard key={tutor._id} tutor={tutor}></TutorsCard>)
                }
            </div>

        </div>
    );
};

export default AllTutors;