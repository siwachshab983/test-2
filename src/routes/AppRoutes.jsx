import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Menu from '../pages/Menu';
import CustomizePizza from '../pages/CustomizePizza';
import Offers from '../pages/Offers';

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/customize" element={<CustomizePizza />} />
                <Route path="/offers" element={<Offers />} />
            </Routes>
            <Footer />
        </>
    );
};

export default AppRoutes;
