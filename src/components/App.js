import '../styles/App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import CartPreview from './CartPreview'
import Cart from './Cart'
import Apple from './Apple';
import Samsung from './Samsung';
import Google from './Google';
import Microsoft from './Microsoft';
import Accessories from './Accessories';
import ProductPage from './ProductPage';

// import data from '../data/productData.js'

// IMPORTING STORE DATA FILES WITH ARRAY OF OBJECTS
import shopData from '../data/shopData.js'
import appleData from '../data/appleData.js'
import samsungData from '../data/samsungData.js'
import googleData from '../data/googleData.js'
import microsoftData from '../data/microsoftData.js'
import accessoriesData from '../data/accessoriesData.js'

function App() {
  const [cartPreview, setCartPreview ] = useState(false)
  const [searchbar, setSearchbar ] = useState(false)
 
  //console.log(cartPreview)
  const [shoppingCart, setShoppingCart] = useState([])
  const [total, cartTotal] = useState()
  //console.log(shoppingCart)

  function addToCart(productData) {
    const itemExistInCart = shoppingCart.find((item) => item.id === productData.id)

    if(!shoppingCart.includes(itemExistInCart)) {
      shoppingCart.push(productData)
      //const productIndex = {...productData, key: index }
    } else {
      console.log('item already in cart')
      //alert('Product already added to cart')
    }
    setShoppingCart([...shoppingCart])
  }

  function removeFromCart(productData) {
    const itemExistInCart = shoppingCart.find((item) => item.id === productData.id)
    if(itemExistInCart) {
      setShoppingCart(shoppingCart.filter((item) => item.id !== productData.id))
    }
  }

  function increaseQuanity(productData) {

    const itemExistInCart = shoppingCart.find((item) => item.id === productData.id)
    if(itemExistInCart) {
      setShoppingCart(shoppingCart.map((currentItem) => 
      currentItem.id === productData.id && productData.qty < 9
      ? {...itemExistInCart, qty: itemExistInCart.qty + 1 } : currentItem
      )
      );
    }
  }




function decreaseQuanity(productData) {
  const itemExistInCart = shoppingCart.find((item) => item.id === productData.id)

  if(itemExistInCart) {
    setShoppingCart(shoppingCart.map((currentItem) => 
     currentItem.id === productData.id && productData.qty > 1 
     ? {...itemExistInCart, qty: itemExistInCart.qty - 1 } : currentItem 
     )
     );
  }
}

function purchaseCompleted() {
    setShoppingCart(shoppingCart.filter((currentItem) => currentItem.length ))
}



const pricesAsString = shoppingCart.map((x) => x.price);
const pricesAsNumbers = pricesAsString.map((x) => parseFloat(x.replace(/[$,]/g, '')));
const itemQuantity = shoppingCart.map((x) => x.qty)
const totalItemCost = shoppingCart.map((item, index) => itemQuantity[index] * pricesAsNumbers[index]);

const cartTotalCost = shoppingCart.length ? totalItemCost.reduce((accum, current) => accum + current) : 0
const cartPlusTax = cartTotalCost * 1.075;
const cartTaxOnly = Number((cartPlusTax - cartTotalCost).toFixed(2));
console.log(typeof tax)

function formatNumberWithCommas(number) {
  return number ? number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';
}

const totalCost = formatNumberWithCommas(cartTotalCost) || 0
const totalTax = formatNumberWithCommas(cartTaxOnly) || 0
const grandTotal = formatNumberWithCommas(cartPlusTax) || 0


  return (
    <Router>
<div className="App" style={{  backgroundColor: cartPreview || searchbar  ? 'rgba(0, 0, 0, .8)' : '' }}>

        <Navbar 
          cartPreview={cartPreview} 
          setCartPreview={setCartPreview} 
          searchbar={searchbar}
          setSearchbar={setSearchbar}
          shoppingCart={shoppingCart}
          removeFromCart={removeFromCart} 
          increaseQuanity={increaseQuanity}
          decreaseQuanity={decreaseQuanity}
          totalCost={totalCost}
        />
        <Routes>
       
          <Route path="" element={ <Home  to="/Home"/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={
            <Shop 
              shopData={shopData} 
              searchbar={searchbar}
              setSearchbar={setSearchbar}
              />} />
          <Route path="/Apple" element={<Apple appleData={appleData} />} />
          <Route path="/Samsung" element={<Samsung samsungData={samsungData} />} />
          <Route path="/Google" element={<Google googleData={googleData} />} />
          <Route path="/Microsoft" element={<Microsoft microsoftData={microsoftData} />} />
          <Route path="/Accessories" element={<Accessories accessoriesData={accessoriesData} />} />
          <Route path="/ProductPage/:id/:category" element={
            <ProductPage 
              cartPreview={cartPreview}  
              setCartPreview={setCartPreview} 
              addToCart={addToCart} 
              shoppingCart={shoppingCart}
              removeFromCart={removeFromCart}
              increaseQuanity={increaseQuanity}
              decreaseQuanity={decreaseQuanity}
              totalCost={totalCost}
            />}/>
          <Route path="/Cart" element={
            <Cart 
              shoppingCart={shoppingCart}
              addToCart={addToCart}
              totalCost={totalCost}
              totalTax={totalTax}
              grandTotal={grandTotal}
              purchaseCompleted={purchaseCompleted}
          />}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// ******* DRY code both calculations and converting to sring ******
// const totalCost = (shoppingCart.length
//   ? totalItemCost.reduce((accum, current) => accum + current)
//   : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   console.log(typeof totalCost )


// *****************  ACTIVATE CART PREV ON BUY / CART BUTTON  *****************
  // function handleDocumentClick(event) {
  //   // Check if the cartPreview is open and if the click event did not originate from the cart
  //   if (cartPreview && !event.target.classList.contains('activate-cp')) {
  //     setCartPreview(false);
  //   }  
  // }
  // useEffect(() => {
  //   document.addEventListener('click', handleDocumentClick);

  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, [cartPreview]);
