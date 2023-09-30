import '../styles/Shop.css';
import Product from './Product'



function Samsung(props) {

  const { data } = props

  return (
    <div className="Samsung">
        
         { data[1].map((d) => {
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
