import React, { useEffect } from 'react';
import Introduce from '../Introduce/Introduce';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Services from '../../Services/Services';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import Brands from '../Brands/Brands';
import Pricing from '../Pricing/Pricing';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {

    useEffect(() => {
        window.addEventListener("load", function(){
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none'
            }, 1000)
        });
    }, [])

    return (
        <>
            <div id="preloader"></div>
            <div>
                <Introduce></Introduce>
                <About></About>
                <Resume></Resume>
                <Services></Services>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Testimonial></Testimonial>
                <Brands></Brands>
                <Pricing></Pricing>
                <ContactUs></ContactUs>
            </div>
        </>
    );
};

export default Home;