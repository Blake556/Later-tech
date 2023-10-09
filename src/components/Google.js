
import Product from './Product'



function Google(props) {

  const { googleData } = props

  return (
    <div className="Google">
         { googleData.map((d) => {
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

export default Google;
