import { faBox } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/CartPreview.css';
import iPhone from './../images/Apple/iphonebig-15-pro-front.png' 


function CartPreview(props) {


  //console.log(props.shoppingCart ? props.shoppingCart[0].id : null)
  const itemsInCart = props.shoppingCart;
  
  return (props.trigger) ? (
    <div className={`PopUpCart ${props.trigger ? 'cart-preview-show' : ''}`}>
        {/* <div className="popup-inner"> */}
        <div className="cart-preview-header">
            <h4>Your order</h4>
            <button className="close-cart-preview" onClick={() => props.setTrigger(false)}>X</button>
        </div>
        <div className="cart-prev-shipping-box">
          <span className="cart-prev-shipping-header">This order qualifies for FREE shipping.</span>
        </div>
        <div className="cart-prev-all-items-box" >
        {itemsInCart ? itemsInCart.map((item) => (
         
        <div className="cart-prev-item-box row">
        
          <div className="cart-prev-img col-4 d-flex justify-content-center">
            <img src={item.img1} height='150px' />
          </div>
          <div className="cart-prev-description-box col-7">
            <h6 className="cart-prev-description">{item.name}</h6>
            <p className="cart-prev-description cart-prev-color">{item.color}</p>
            <p className="cart-prev-description">{item.price}</p>
          {/* </div> */}
          {/* <div className="quanity-selector"> */}
          <span className="quanity-selector left">-</span>
          <span className="quanity-selector middle">1</span>
          <span className="quanity-selector right">+</span>
          </div>
          <div className="cart-prev-remove-box col-1">
            <span className="cart-prev-remove" onClick={() => props.removeFromCart(item)}>X</span>
          </div>
        </div>
        
        )) : ''}
        </div>
        

        {/* <div className="cart-prev-item-box row">
        
          <div className="cart-prev-img col-4">
            <img src={iPhone} height='150px' />
          </div>
          <div className="cart-prev-description-box col-7">
            <h6 className="cart-prev-description">iPhone 15 pro max</h6>
            <p className="cart-prev-description">Black Titanium</p>
            <p className="cart-prev-description">$1,399.00</p>
     
          <span className="quanity-selector left">-</span>
          <span className="quanity-selector middle">1</span>
          <span className="quanity-selector right">+</span>
          </div>
          <div className="cart-prev-remove col-1">
            <span>X</span>
          </div>
        </div> */}
           
            <Link to="/Cart" className="">
              <div className="cart-preview">
                <button onClick={() => props.setTrigger(false)} className="btn cart-preview-button">Cart</button>
              </div>
            </Link>
            {/* {props.childern } */}
        {/* </div> */}
    </div>
  ) : "";
}

export default CartPreview;