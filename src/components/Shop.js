import '../styles/Shop.css';
import Product from './Product'
// import data from './productData.js'


function Shop(props) {

  const { data } = props

  return (
    <div className="App">
         
         { data.map((d) => {
            return (
              <Product 
                image={d.img}
                name={d.name}
              />
        )
        })}

    </div>
  );
}

export default Shop;
