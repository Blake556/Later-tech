import '../styles/Home.css';
import iphnoe from "../images/prodcuts/iPhone15.png" 
function Home() {
    return (
     <div className="Home">
       
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Later Tech</h1>
          <h3 class="fw-normal text-muted mb-3">Get the latest tech at the cheapes price</h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <a class="icon-link" href="#">
              Learn more
              <svg class="bi"></svg>
            </a>
            <a class="icon-link" href="#">
              Buy
              <svg class="bi"></svg>
            </a>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
         {/* <img className="product-device" src={iphnoe}></img> 
        <div class=""></div> */}
      </div>
    
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="product-box text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-body-tertiary shadow-sm mx-auto product" ></div>
        </div>
        <div class="product-box  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-dark shadow-sm mx-auto product"></div>
        </div>
      </div>
    
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="product-box bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-dark shadow-sm mx-auto product"></div>
        </div>
        <div class="product-box text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-body-tertiary shadow-sm mx-auto product"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
