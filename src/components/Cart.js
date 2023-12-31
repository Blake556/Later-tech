import "../styles/Cart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import iPhone from "./../images/Apple/iphonebig-15-pro-front.png";
import location from "./../images/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";

function Cart(props) {
  console.log(props.shoppingCart);

  //   const total = new URLSearchParams(props.location.search).get('total');
  // console.log(total)

  const [btnClicked, setBtnClicked] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setBtnClicked(true);
    }, "1500");
  }

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + "";
  }

  // const cartPlusTax = cartTotalCost * 1.075;

  // console.log(props.formattedCartTotalCost)

  return (
    <div className="Cart ">
      <div className="row cart-row">
        <div className="col-6 divider custom-col shipping-details">
          <div className="inner-col">
            {!btnClicked ? (
              <>
                <div className="pay-now">
                  <div className="row shipping-row">
                    <h6>Shop pay</h6>
                    <p>Jsmith@gmail.com</p>
                  </div>
                  <div className="row shipping-row">
                    <h6>Ship to</h6>
                    <p>
                      James Smith 24486 Yukon Rd, Kasilof, Alaska 99610, USA
                    </p>
                  </div>
                  <div className="row shipping-row">
                    <h6>Shipping Method</h6>
                    <p>
                      USPS Tracked Shipping (1-5 business day transit time) -
                      Free
                    </p>
                  </div>
                  <div className="row shipping-row">
                    <h6>Payment method</h6>
                    <p>American Express **** 0000</p>
                  </div>

                  <div className="checkbox-container">
                    <input type="checkbox" id="myCheckbox" />
                    <label htmlFor="myCheckbox">
                      Sign me up for news and offers from this store
                    </label>
                  </div>

                  <div className="row">
                    <button
                      onClick={handleClick}
                      className="btn btn-primary pay-now-btn"
                    >
                      Pay now
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="order-row-container">
                  <div className="row order-row">
                    <p>Order 10624</p>
                    <h5>Thank you, James!</h5>
                  </div>

                  <div className="row order-con-map">
                    <img src={location} className="order-con-map-img" />

                    <h5 className="mb-0 order-conf">Your order is confirmed</h5>
                    <span>
                      You’ll receive an email when your order is ready.
                    </span>
                  </div>

                  <div className="order-con-details-box">
                    <div className="row order-details-header">
                      <h5>Order details</h5>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <h6 className="order-con-sub-header">
                          Contact information
                        </h6>
                        <p>Jsmith@gmail.com</p>
                      </div>

                      <div className="col-6">
                        <h6 className="order-con-sub-header">Payment method</h6>
                        <div className="card-type d-flex">
                          <FontAwesomeIcon
                            icon={faCcAmex}
                            className="amex-logo"
                          />
                          <p className="order-con-details">ending with 0000</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <h6 className="order-con-sub-header sub-header-sr">
                          Shipping address
                        </h6>
                        <p className="order-con-details">James Smith</p>
                        <p className="order-con-details">24486 Yukon Rd</p>
                        <p className="order-con-details">Kasilof Ak 99610</p>
                        <p className="order-con-details">United States</p>
                        <p className="order-con-details">‎+10000000000</p>
                      </div>
                      <div className="col-6">
                        <h6 className="order-con-sub-header sub-header-sr">
                          Billing address
                        </h6>
                        <p className="order-con-details">James Smith</p>
                        <p className="order-con-details">24486 Yukon Rd</p>
                        <p className="order-con-details">Kasilof Ak 99610</p>
                        <p className="order-con-details">United States</p>
                        <p>‎+10000000000</p>
                      </div>
                      <div className="col-6">
                        <h6 className="order-con-sub-header sub-header-sr">
                          Shipping method
                        </h6>
                        <p className="order-con-details">
                          Free Tracked Shipping
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row continue-shop-row">
                    <Link to="/Shop" className="">
                      <button
                        onClick={() => props.purchaseCompleted()}
                        className="btn btn-dark continue-shop-btn"
                      >
                        Continue shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="col-6 order-items-box custom-col">
          {props.shoppingCart
            ? props.shoppingCart.map((item) => (
                <div className="row inner-cart-detail-row">
                  <div className="show-quanity-box">
                    <div className="show-quanity">{item.qty}</div>
                  </div>
                  <div className="col-3 cart-item-img-box">
                    <div className="cart-inner-box-img d-flex justify-content-center">
                      <img
                        className="cart-item-img"
                        src={item.img1}
                        height="80px"
                      />
                    </div>
                  </div>
                  <div className="col-6 cart-item-details-box">
                    <h6 className="cart-item-details">
                      {truncateString(item.name, 18)}
                    </h6>
                    <p className="cart-item-details cart-item-color">
                      {item.color}
                    </p>
                  </div>
                  <div className="col-3 cart-item-price-box d-flex justify-content-end">
                    <p className="cart-item-price">{item.price}</p>
                  </div>
                </div>
              ))
            : ""}

          <div className="row total-cart-detail-row">
            <div className="cart-detail">
              <h6>Subtotal</h6>
              <span className="cart-detail-value">${props.totalCost}</span>
            </div>
            <div className="cart-detail">
              <h6>Shipping</h6>
              <span className="cart-detail-value">Free</span>
            </div>
            <div className="cart-detail">
              <h6>Tax</h6>
              <span className="cart-detail-value">${props.totalTax}</span>
            </div>
            <div className="cart-detail">
              <h5 className="">Total</h5>
              <h5 className="cart-detail-value">${props.grandTotal}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
