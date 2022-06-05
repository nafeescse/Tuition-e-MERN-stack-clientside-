import React from 'react';
import banner from '../../assets/img/banner1.jpg'
import TutorModal from '../Modals/TutorModal';

const Banner2 = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full mt-16">
            <figure className=''><img className='w-full' src={banner} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-white text-center mt-14">No.1 Tuition Media in Bangladesh</h2>
                <p className='mx-10 text-white md:text-3xl text-center mt-10'>Hundreds of tuitions and experienced Tutors are available in Tuition-e. Join Now to find your desired one.</p>
                <div className="flex flex-row md:flex-col  justify-center gap-5 mx-auto mb-5">
                    <button className="btn btn-error text-white  ">Post a Tuition</button>

                    <label htmlFor="tutor-modal" className="btn btn-error text-white modal-button">Become a Tutor</label>
                </div>
            </div>
            <TutorModal></TutorModal>
        </div>
    );
};

export default Banner2;