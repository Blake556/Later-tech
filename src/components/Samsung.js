import '../styles/Shop.css';
import Product from './Product'



function Samsung(props) {

  const { samsungData } = props

  return (
    <div className="Samsung">
        
         { samsungData.map((d) => {
            return (
              <Product 
                key={d.id}
                id={d.id} 
                category={d.category}
                image={d.img}
                name={d.name}
              />
        )
        })}

    </div>
  );
}

export default Samsung;
