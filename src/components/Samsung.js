import '../styles/Shop.css';
import Product from './Product'



function Samsung(props) {

  const { samsungData } = props

  return (
    <div className="Samsung">
        
         { samsungData.map((d) => {
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

export default Samsung;
