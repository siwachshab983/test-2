import React, { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Aos from 'aos';
import 'aos/dist/aos.css';
import BackToTop from './components/common/BackToTop.Jsx';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <>
      <AppRoutes />
      <BackToTop/>
    </>
  )
}

export default App
