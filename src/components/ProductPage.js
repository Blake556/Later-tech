import '../styles/ProductPage.css';
import img from './../images/Apple/iphoneBlue-15-pro-front.png'


function ProductPage() {
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

export default ProductPage;