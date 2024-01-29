import React from 'react';
import Introduce from '../Introduce/Introduce';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Introduce></Introduce>
            <About></About>
            <Resume></Resume>
            <Services></Services>
        </div>
    );
};

export default Home;