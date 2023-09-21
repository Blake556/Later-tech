import '../styles/Product.css';



function Product(props) {
    const {image, name} = props
  return (
  
    <div className="container Product-box col-3">
        <img src={image} height='250px' />
        <h5>{name}</h5>
        
    </div>
   
  );
}

export default Product
