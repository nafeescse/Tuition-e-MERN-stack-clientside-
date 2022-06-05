import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import TuitionCard from './TuitionCard';

const AllTuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    useEffect(() => {
        fetch('https://amartuition777.herokuapp.com/all-tuitions')
            .then(res => res.json()
                .then(data => setTuitions(data)))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl text-error font-bold my-3'>Available Tuitions({tuitions.length})</h1>
            <div className='m-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>


                {
                    tuitions.map((tuition, index) => <TuitionCard key={index} tuition={tuition}></TuitionCard>)
                }

            </div>
        </div>
    );
};

export default AllTuitions;