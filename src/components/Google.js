
import Product from './Product'



function Google(props) {

  const { googleData } = props

  return (
    <div className="Google">
    <h1>Google</h1>
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

export default Google;
