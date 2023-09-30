import '../styles/Shop.css';
import Product from './Product'



function Apple(props) {

  const { appleData } = props
    //console.log(data)
  return (
    <div className="Apple">
        
         { appleData.map((d) => {
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

export default  Apple;
