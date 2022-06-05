import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import TuitionCard from '../TuitionCard';
import 'swiper/css';

const Tuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    useEffect(() => {
        fetch('https://amartuition777.herokuapp.com/all-tuitions')
            .then(res => res.json()
                .then(data => setTuitions(data)))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl text-error font-bold my-3'>Available Tuitions({tuitions.length})</h1>
            <div className=''>

                <Swiper
                    className='bg-error z-0'
                    spaceBetween={50}
                    slidesPerView={2}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        tuitions.map((tuition, index) => <SwiperSlide className='z-50 bg-white rounded-2xl m-10'><TuitionCard key={index} tuition={tuition}></TuitionCard> </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default Tuitions;