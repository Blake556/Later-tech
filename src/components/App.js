import '../styles/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import data from '../productData.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={ <Home  to="/Home"/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop data={data} />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/Cart" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
