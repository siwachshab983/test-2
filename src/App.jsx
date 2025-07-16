import React, { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    </>
  )
}

export default App
