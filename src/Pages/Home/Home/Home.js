import React from 'react';
import Introduce from '../Introduce/Introduce';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Services from '../../Services/Services';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Introduce></Introduce>
            <About></About>
            <Resume></Resume>
            <Services></Services>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;