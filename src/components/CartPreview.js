import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPreview.css';
import iPhone from './../images/Apple/iphonebig-15-pro-front.png';

function CartPreview(props) {
  console.log(props.formattedCartTotalCost);
  const itemsInCart = props.shoppingCart;

  return props.trigger ? (
    <div className={`PopUpCart ${props.trigger ? 'cart-preview-show' : ''}`}>
      <div className="cart-preview-header">
        <h4>Your order</h4>
        <button className="close-cart-preview" onClick={() => props.setTrigger(false)}>
          X
        </button>
      </div>
      <div className="cart-prev-shipping-box">
        <span className="cart-prev-shipping-header">This order qualifies for FREE shipping.</span>
      </div>
      <div className="cart-prev-all-items-box">
        {!itemsInCart || itemsInCart.length === 0 ? (
          <p className='cart-empty-msg'>Your cart is empty!</p>
        ) : (
          itemsInCart.map((item) => (
            <div className="cart-prev-item-box row">
              <div className="cart-prev-img col-4 d-flex justify-content-center">
                <img src={item.img1} height="150px" alt={item.name} />
              </div>
              <div className="cart-prev-description-box col-7">
                <h6 className="cart-prev-description">{item.name}</h6>
                <p className="cart-prev-description cart-prev-color">{item.color}</p>
                <p className="cart-prev-description cart-pre-price">{item.price}</p>
                <button className="quanity-selector left" onClick={() => props.decreaseQuanity(item)}>
                  -
                </button>
                <span className="quanity-selector middle">{item.qty}</span>
                <button className="quanity-selector right" onClick={() => props.increaseQuanity(item)}>
                  +
                </button>
              </div>
              <div className="cart-prev-remove-box col-1">
                <span className="cart-prev-remove" onClick={() => props.removeFromCart(item)}>
                  X
                </span>
              </div>
            </div>
          ))
        )}
        {itemsInCart && itemsInCart.length > 0 && (
          <div className="cart-preview-bottom-box">
            <div className="total-box d-flex align-items-end">
              <span className="total">Total:</span>
              <h5 className="mb-0">${props.totalCost}</h5>
            </div>
            <Link to="/Cart">
              <div className="cart-btn-box">
                <button onClick={() => props.setTrigger(false)} className="btn cart-btn">
                  Cart
                </button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default CartPreview;
