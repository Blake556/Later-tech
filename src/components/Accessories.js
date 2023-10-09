import '../styles/Shop.css';
import Product from './Product'
// import data from './productData.js'


function Accessories(props) {

  const { accessoriesData } = props

  return (
    <div className="Accessories">
      { accessoriesData.map((d) => {
            return (
              <Product 
                key={d.id}
                id={d.id} 
                category={d.category}
                image1={d.img1}
                image2={d.img2}
                name={d.name}
                color={d.color}
                description={d.description}
              />
        )
        })}
    </div>
  );
}

export default Accessories;
