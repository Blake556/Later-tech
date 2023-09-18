import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import image from "../images/icon.png"

function Navbar() {
    // let img = "../images/laptop1.png"
  return (
    <div className="Navbar ">
      <div className="shipping-box row text-center">
        <span className='shipping'>Fast Free Shipping in US</span>
      </div>
      <div className="nav-main row d-flex">
        <div className="links-box col-3 d-flex align-items-center">
        <div className="link-box">
          <Link to="/Home"> <span className='link'>Home</span> </Link> 
        </div>
        <div className="link-box">
          <Link to="/Shop"> <span className='link'>Shop</span> </Link>
        </div>
        <div className="link-box">
          <Link to="/About"> <span className='link'>About</span> </Link>
        </div>
        
        </div>
        <div className="logo-box col-6 text-center">
          <img src={image} className='logo'/> 
          {/* <span>Later Tech</span> */}
        </div>
        <div className="sc-box col-3 d-flex justify-content-end align-items-center">
          <Link to="/Cart"> <FontAwesomeIcon icon={faMagnifyingGlass} className="sc"/> </Link>
          <Link to="/Cart"> <FontAwesomeIcon icon={faCartShopping} className="sc"/> </Link>
        </div>
      </div>
    
    </div>
  );
}

export default Navbar;
