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

export default Samsung;
