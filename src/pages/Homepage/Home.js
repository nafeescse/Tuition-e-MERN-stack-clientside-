import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Tuitions from './Tuitions';
import Tutors from './Tutors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tuitions></Tuitions>
            <Tutors></Tutors>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;