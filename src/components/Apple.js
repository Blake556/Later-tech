// import '../styles/Shop.css';
import Product from './Product'
import { Link } from 'react-router-dom';
import { useState } from "react";


function Apple(props) {

    const { appleData } = props
    //console.log(data)

    const [product, setProduct] = useState()
    console.log(product)

    function handleClick(event) {
        setProduct(event.target.value)
    }

   
  return (
    <div className="Body Apple">
         { appleData.map((d) => {
            return (
              <Product 
                key={d.id}
                image={d.img}
                name={d.name}
                onClick={handleClick}
              />
        )
        })}

    </div>
  );
}

export default  Apple;
