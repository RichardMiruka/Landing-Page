import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Navbar from './pages/Navbar';



const App = () => {
  return (
    <Router>
      <Navbar  />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
