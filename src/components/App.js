import '../styles/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Apple from './Apple';
import Samsung from './Samsung';
import Google from './Google';
import Microsoft from './Microsoft';
import Accessories from './Accessories';
import ProductPage from './ProductPage';
//import CartPreview from './CartPreview'
// import data from '../data/productData.js'

// IMPORTING STORE DATA FILES WITH ARRAY OF OBJECTS
import shopData from '../data/shopData.js'
import appleData from '../data/appleData.js'
import samsungData from '../data/samsungData.js'
import googleData from '../data/googleData.js'
import microsoftData from '../data/microsoftData.js'
import accessoriesData from '../data/accessoriesData.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
       
          <Route path="" element={ <Home  to="/Home"/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop shopData={shopData} />} />
          <Route path="/Apple" element={<Apple appleData={appleData} />} />
          <Route path="/Samsung" element={<Samsung samsungData={samsungData} />} />
          <Route path="/Google" element={<Google googleData={googleData} />} />
          <Route path="/Microsoft" element={<Microsoft microsoftData={microsoftData} />} />
          <Route path="/Accessories" element={<Accessories accessoriesData={accessoriesData} />} />
          <Route path="/ProductPage/:id/:category" element={<ProductPage />} />
          {/* <Route path="/Cart" element={<CartPreview />} /> */}
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
