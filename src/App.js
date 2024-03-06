import React, { useEffect } from 'react'
 import "@fortawesome/fontawesome-free/css/all.css";
 import "aos/dist/aos.css";
import AOS from "aos";
import MainRoutes from './routes/MainRoutes';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App