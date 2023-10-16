import "../styles/Cart.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import iPhone from "./../images/Apple/iphonebig-15-pro-front.png";
import location from "./../images/location.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';



function Cart() {

  const [btnClicked, setBtnClicked] = useState(false)

  function handleClick() {
    setBtnClicked(true)
  }

  return (
    <div className="Cart ">
      <div className="row cart-row">
        <div className="col-6 divider custom-col shipping-details">
          <div className="inner-col">

          { !btnClicked ? (
            <>
           <div className="row shipping-row">
              <h6>Shop pay</h6>
              <p>Jsmith@gmail.com</p>
            </div>
            <div className="row shipping-row">
              <h6>Ship to</h6>
              <p>James Smith 24486 Yukon Rd, Kasilof, Alaska 99610, USA</p>
            </div>
            <div className="row shipping-row">
              <h6>Shipping Method</h6>
              <p>USPS Tracked Shipping (1-5 business day transit time) - Free</p>
            </div>
            <div className="row shipping-row">
              <h6>Payment method</h6>
              <p>American Express **** 0000</p>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox">Sign me up for news and offers from this store</label>
            </div>

            <div className="row">
              <button onClick={handleClick} className="btn btn-primary pay-now-btn">Pay now</button>
            </div> 
            </>

          ) : (
            <>


            <div className="row order-row">
              <p>Order 10624</p>
              <h5>Thank you, James!</h5>
            </div>

            <div className="row order-con-map">
              <img src={location} className="order-con-map-img"/>
             
              <h5 className="mb-0 order-conf">Your order is confirmed</h5>
              <span >You’ll receive an email when your order is ready.</span>
            
            </div>

            <div className="order-con-details-box">
              <div className="row order-details-header">
                  <h5 >Order details</h5>
              </div>

              <div className="row">
                  <div className="col-6">
                    <h6 className="order-con-sub-header">Contact information</h6>
                    <p>Jsmith@gmail.com</p>
                  </div>

                  <div className="col-6">
                    <h6 className="order-con-sub-header">Payment method</h6>
                    <div className="card-type d-flex">
                    <FontAwesomeIcon icon={faCcAmex} className="amex-logo" />
                    <p className="order-con-details">ending with 0000</p>
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-6">
                    <h6 className="order-con-sub-header sub-header-sr">Shipping address</h6>
                    <p className="order-con-details">James Smith</p>
                    <p className="order-con-details">24486 Yukon Rd</p>
                    <p className="order-con-details">Kasilof Ak 99610</p>
                    <p className="order-con-details">United States</p>
                    <p className="order-con-details">‎+10000000000</p>
                  </div>
                  <div className="col-6">
                    <h6 className="order-con-sub-header sub-header-sr">Billing address</h6>
                    <p className="order-con-details">James Smith</p>
                    <p className="order-con-details">24486 Yukon Rd</p>
                    <p className="order-con-details">Kasilof Ak 99610</p>
                    <p className="order-con-details">United States</p>
                    <p>‎+10000000000</p>
                  </div>
                  <div className="col-6">
                    <h6 className="order-con-sub-header sub-header-sr">Shipping method</h6>
                    <p className="order-con-details">Free Tracked Shipping</p>
                  </div>
              </div>

            </div> 





            <div className="row continue-shop-row">
              
                <Link to="/Shop" className="">
                  <button className="btn btn-dark continue-shop-btn">Continue shopping</button>
                </Link>
             
            </div>
            </>
          )}
          </div>
        </div>

        <div className="col-6 order-items-box custom-col">
          <div className="row inner-cart-detail-row">
            <div className="col-3 cart-item-img-box">
              <img className="cart-item-img" src={iPhone} height="80px" />
            </div>
            <div className="col-6 cart-item-details-box">
              <h6 className="cart-item-details">iPhone 15 Pro Max</h6>
              <p className="cart-item-details cart-item-color">
                Black Titanium
              </p>
            </div>
            <div className="col-3 cart-item-price-box">
              <p className="cart-item-price">$1,399.00</p>
            </div>
          </div>

          <div className="row inner-cart-detail-row">
            <div className="col-3 cart-item-img-box">
              <img className="cart-item-img" src={iPhone} height="80px" />
            </div>
            <div className="col-6 cart-item-details-box">
              <h6 className="cart-item-details">iPhone 15 Pro Max</h6>
              <p className="cart-item-details cart-item-color">
                Black Titanium
              </p>
            </div>
            <div className="col-3 cart-item-price-box">
              <p className="cart-item-price">$1,399.00</p>
            </div>
          </div>

          <div className="row total-cart-detail-row">
            <div className="cart-detail">
              <h6>Subtotal</h6>
              <span className="cart-detail-value">$1,399.00</span>
            </div>
            <div className="cart-detail">
              <h6>Shipping</h6>
              <span className="cart-detail-value">Free</span>
            </div>
            <div className="cart-detail">
              <h6>Tax</h6>
              <span className="cart-detail-value">$115.00</span>
            </div>
            <div className="cart-detail">
              <h5>Total</h5>
              <span className="cart-detail-value">$1,514.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
