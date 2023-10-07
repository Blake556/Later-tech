// import '../styles/Shop.css';
import Product from './Product'
import { Link } from 'react-router-dom';
import { useState } from "react";


function Apple(props) {

    const { appleData } = props

   
  return (
    <div className="Body Apple">
         { appleData.map((d) => {
            return (
              <Product 
                key={d.id}
                id={d.id} 
                category={d.category}
                image={d.img}
                imageSd={d.imgSd}
                name={d.name}
                color={d.color}
                description={d.description}
              />
        )
        })}

    </div>
  );
}

export default  Apple;
