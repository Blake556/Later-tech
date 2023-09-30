import '../styles/Shop.css';
import Product from './Product'
// import data from './productData.js'


function Accessories(props) {

  const { data } = props

  return (
    <div className="Accessories">
    <h1>You do work right?</h1>
{/*          
         { data.map((d) => {
            return (
              <Product 
                image={d.img}
                name={d.name}
              />
        )
        })} */}

    </div>
  );
}

export default Accessories;
