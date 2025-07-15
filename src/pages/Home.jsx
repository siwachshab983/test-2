import React from 'react';

import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import BuyGetOffer from '../components/BuyGetOffer';
import CravingSomething from '../components/CravingSomething';
import FoodDelivery from '../components/FoodDelivery';
import HowItWorks from '../components/HowItWorks';
import LimitedOffer from '../components/LimitedOffer';
import OurGallery from '../components/OurGallery';
import OurMenu from '../components/OurMenu';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

const Home = () => {
    return (
        <main className="w-full">
            <Hero />
            <About />
            <LimitedOffer />
            <BestSellers />
            <OurMenu />
            <BuyGetOffer />
            <FoodDelivery />
            <HowItWorks />
            <Testimonial />
            <OurGallery />
            <CravingSomething />
        </main>
    );
};

export default Home;
