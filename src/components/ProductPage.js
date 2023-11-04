import '../styles/ProductPage.css';
// import img from './../images/Apple/iphoneBlue-15-pro-front.png';

import CartPreview from './CartPreview'
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import appleData from '../data/appleData';
import samsungData from '../data/samsungData';
import googleData from '../data/googleData';
import microsoftData from '../data/microsoftData';
import accessoriesData from '../data/accessoriesData';

function ProductPage(props) {

  const { id, category } = useParams();
  const location = useLocation();

  // *****************   CART POPUP STATE   ********************* //
  const [isHovered, setIsHovered] = useState(true);

  // thought i would neen btnclick state in productpage but itseems i do not
  //const [btnClicked, setBtnClicked] = useState(false)
  // console.log(props.formattedCartTotalCost)

  // const totalCost = props.calculateCartTotalCost(props.shoppingCart);


// *****************  START HANDLE CART POPUP FUNCTION   ********************* //

  function handleMouseOver() {
    setIsHovered(false)
  }

  function handleMouseOut() {
    setIsHovered(true)
  }

// *****************  END OF HANDLE CART POPUP FUNCTION  ********************* //


  function handleAddToCart(index) {

    const productData = {
      id: product.id,
      qty: 1,
      img1: product.img1,
      name: product.name,
      color: product.color,
      price: product.price,
    };

    // console.log(productData)
    props.addToCart(productData);
    //setBtnClicked(true)
  }

  function passRemoveCartF(item) {
   
  }
  



  let productData;

  switch (category) {
    case 'apple':
      productData = appleData;
      break;
    case 'samsung':
      productData = samsungData;
      break;
    case 'google':
      productData = googleData;
      break;
    case 'microsoft':
      productData = microsoftData;
      break;
    case 'accessories':
      productData = accessoriesData;
      break;
    default:
      productData = null;
  }


  // Find the product by 'id' in the selected category's data
  const product = productData.find((product) => product.id === Number(id));


  //console.log(appleData[0].imgSd)
  //console.log(product.id, product.img1, product.imgSd, product.name);
  




  const imgSource = isHovered ? product.img1 : product.img2;

  if (!product) {
    // Handle the case when the product with the given id is not found
    return <div>Product not found</div>;
  }



  return (
    <div className="Product-Page-container">
      <div className="row d-flex justify-content-center product-page-row">
        
        <div onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} className="product-page-img-box d-flex justify-content-center col-6">
          <img src={imgSource} height='800px' className="product-page-img" alt="Product" />
        </div>
        <div className="product-page-datails-box col-6">
          <div className="all-details product-page-name-box">
            <h2>{product.name}</h2>
          </div>
          <div className="all-details inner-details product-page-color-box row">
            <h6 className="product-page-color col-6">Color - {product.color}</h6>
            {/* <div className="col-6 color"></div> */}
          </div>
          <div className="all-details inner-details product-page-storage-box">
            <h6 className="col-6">Storage - {product.storage}</h6>
          </div>
          <div className="all-details inner-details product-page-price-box">
            <h6 className="">{product.price}</h6>
          </div>
          <div className="all-details product-page-desc-box">
            <h6>{product.description}</h6>
          </div>
          <div className="all-details product-page-buy-box">
          <button
            className="btn btn-dark product-page-buy-btn activate-cp"
            onClick={() => {
              props.setCartPreview(true); // Handle the cart preview toggle
              handleAddToCart(); // Handle adding to the cart
             
          }}>
            Buy
          </button>
          </div>
          <CartPreview 
            trigger={props.cartPreview} 
            setTrigger={props.setCartPreview}
            shoppingCart={props.shoppingCart}
            removeFromCart={props.removeFromCart}
            increaseQuanity={props.increaseQuanity}
            decreaseQuanity={props.decreaseQuanity}
            totalCost={props.totalCost} 
            /> 
        </div>
      </div>
    </div>





  );
}

export default ProductPage;





/*

import '../styles/ProductPage.css';
import img from './../images/Apple/iphoneBlue-15-pro-front.png'

// ***************   Added by chatGTB   ********************************************

import { useParams, useLocation } from 'react-router-dom';
import appleData from '../data/appleData';
import samsungData from '../data/samsungData';
import googleData from '../data/googleData';
import microsoftData from '../data/microsoftData';
import accessoriesData from '../data/accessoriesData';


function ProductPage() {

  // ***************   Added by chatGTB   ********************************************

  const { id, category } = useParams();
    const location = useLocation();

    let productData;

    switch (category) {
        case 'apple':
            productData = appleData;
            break;
        case 'samsung':
            productData = samsungData;
            break;
        case 'google':
            productData = googleData;
            break;
        case 'microsoft':
            productData = microsoftData;
            break;
        case 'accessories':
            productData = accessoriesData;
            break;
        default:
            productData = null;
    }

    if (!productData) {
        // Handle the case when the category is not found
        return <div>Category not found</div>;
    }

    // Find the product by 'id' in the selected category's data
    const product = productData.find((product) => product.id === Number(id));

    if (!product) {
        // Handle the case when the product with the given id is not found
        return <div>Product not found</div>;
    }

    const productFromState = location.state && location.state.product;

    if (!productFromState) {
        // Handle the case when there is no product data in the state
        return <div>No product data available</div>;
    }

    const { id: productId, image, name } = productFromState;
    console.log(productId, image, name);


    // ***************  ^^^ End of chatGTB  ^^^  ***************************************


  return (
    <div className="Product-Page-container">
      <div className="row d-flex justify-content-center  product-page-row">

        <div className="product-page-img-box  d-flex justify-content-center col-6">
          <img src={img} className="product-page-img " />
        </div>

        <div className="product-page-datails-box col-6 ">

          <div className="all-details product-page-name-box">
            <h2>iPhone 15 Pro Max </h2>
          </div>
          
          <div className="all-details inner-details product-page-color-box row ">
            <h6 className=" product-page-color col-6">Color - Titanium Blue</h6>
            <div className="col-6 color"></div>
          </div>

          <div className="all-details inner-details product-page-storage-box">
            <h6 className="col-6">Storage - 512BG</h6>
          </div> 

          

          <div className="all-details inner-details product-page-price-box">
            <h6 className="">$1,399.00</h6>
          </div> 

          <div className="all-details product-page-desc-box">
            <h6>iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.</h6>
          </div> 

          <div className="all-details product-page-buy-box">
            <button className="btn btn-dark product-page-buy-btn">Buy</button>
          </div>
           
        </div>

      </div>
    </div>
  );
}

export default ProductPage; */






