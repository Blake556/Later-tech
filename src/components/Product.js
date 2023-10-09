import { faBox, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Product.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Product(props) {
    const { id, category, image1, image2, name, color, storage, price, description } = props;
    const navigate = useNavigate();

    

    function handleClick() {
        navigate(`/ProductPage/${id}/${category}`, { state: { product: { category, id, image1, image2, name, color, storage, price, description } } });
        //console.log(id, image, name)
    }

    return (
        <Link to={`/ProductPage/${id}/${category}`} onClick={handleClick}>
            <div className="container Product-box col-3">
                <img src={image1} className="product-img" alt="Product" />
                <h5>{name}</h5>
            </div>
        </Link>
    );
}

export default Product;













/*
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
   
    // <Link to={`/ProductPage/${id}?category=apple`} onClick={handleClick}>
 
        <div className="container Product-box col-3" onClick={handleClick}>
            <img src={image} className="product-img" />
             <h5>{name}</h5>     
        </div>
      
    //  </Link>
   
  );
}

export default Product;

*/


