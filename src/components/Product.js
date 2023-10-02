import { faBox, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Product.css';
import { Link } from 'react-router-dom';
import { useState } from "react";


function Product(props) {
    const {id, image, name} = props

    const [product, setProduct] = useState({
        id: '',
        image: '',
        name: ''
    })
    console.log(product)

    function handleClick(clickedId) {
        setProduct({
            id: id,
            image: image,
            name: name     
        })
    }
    

    
    
  return (
   
    <Link to="/ProductPage" onClick={handleClick}>
 
        <div className="container Product-box col-3" >
            <img src={image} className="product-img" />
             <h5>{name}</h5>     
        </div>
      
     </Link>
   
  );
}

export default Product;
