import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import TuitionCard from './TuitionCard';

const Tuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-tuitions')
        .then(res => res.json()
        .then(data => setTuitions(data)))
    },[])
    return (
        <div>
             <h1 className='text-center text-4xl text-error font-bold'>Available Tuitions: {tuitions.length}</h1>
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 md:mx-20'>
           
            {
                tuitions.map((tuition, index) => <TuitionCard key={index} tuition={tuition}></TuitionCard>)
            }
            
        </div>
        </div>
       
    );
};

export default Tuitions;