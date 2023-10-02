import '../styles/Shop.css';
import { Link } from 'react-router-dom';
import titanium from '../images/Headers/Titanium.jpeg'


function Shop(props) {
  const { shopData } = props;
  const iphone = shopData[0].img;
  const samsung = shopData[1].img;
  const access = shopData[2].img;
  const Google =shopData[3].img;
  const Windows = shopData[4].img;
  
  


  return (
    <div className="Shop">
      <div className="row">
        <div className="main-img-box">
          <img src={titanium} className="shop-main-image" />
        </div>
          <div className="collection-box col-3">
            <div className="shop-header">
              <h3>Choose your <br /> collection</h3>
            </div>
          </div>

          <Link to="/Apple" className="collection-box col-3">
            <div className="collection-content">
              <img className="collection-img" src={iphone}  />
              <div className="shop-link-header-box">
                <h4 className="shop-link-header">Apple</h4>
              </div>
            </div>
          
          </Link>

          <Link to="/Samsung" className="collection-box col-3">
            <div className="collection-content">
              <img className="collection-img" src={samsung}  />
              <div className="shop-link-header-box">
                <h4 className="shop-link-header">Samsung</h4>
              </div>
            </div>
          </Link>

          <Link to="/Google" className="collection-box col-3">
          <div className="collection-content">
            <img className="collection-img" src={Google}  />
            <div className="shop-link-header-box">
              <h4 className="shop-link-header">Google</h4>
            </div>
          </div>
        </Link>
      </div>

      <div className="row">
        <Link to="/Windows" className="collection-box col-3">
          <div className="collection-content">
            <img className="collection-img" src={Windows}  />
            <div className="shop-link-header-box">
              <h4 className="shop-link-header">Windows</h4>
            </div>
          </div>
        </Link>

        <Link to="/Accessories" className="collection-box col-3">
            <div className="collection-content">
              <img className="collection-img" src={access}  />
              <div className="shop-link-header-box">
                <h4 className="shop-link-header">Accessories</h4>
              </div>
            </div>
          </Link>
      
        
        <div className="help-box col-6">
        <div className="d-flex justify-content-center">
          <h3 className="help-header">Did you find what you were looking for?<br></br>Click here.</h3>
          </div>
        </div>
      </div>

   </div>
  );
}

export default Shop;

