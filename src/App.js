import React, { useEffect } from 'react'
import Header from './utils/Header/Header'
 import "@fortawesome/fontawesome-free/css/all.css";
 import "aos/dist/aos.css";
import Home from './pages/Home';
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
    <Header />
    <Home/>
    </div>
  )
}

export default App