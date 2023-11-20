import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import image from "../images/Headers/icon.png"
import CartPreview from './CartPreview' 
import SearchBar from './SearchBar'


function Navbar(props) {
   
  return (
    <div className="Navbar "  style={{  backgroundColor: props.cartPreview || props.searchbar  ? 'rgba(49, 49, 49)' : ''}}>
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
           <FontAwesomeIcon onClick={() => props.setSearchbar(true)} icon={faMagnifyingGlass} className="sc"/>
        
         <FontAwesomeIcon onClick={() => props.setCartPreview(true)} icon={faCartShopping} className="sc activate-cp"/>
        </div>
      </div>
      <SearchBar 
        searchTrigger={props.searchbar}
        setSearchTrigger={props.setSearchbar}
      />
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
  );
}

export default Navbar;
