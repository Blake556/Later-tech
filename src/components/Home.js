import { mainModule } from 'process';
import '../styles/Home.css';


function Home() {
    return (
        <div className='Home'>
      
        <div className="position-relative bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Later Tech</h1>
            <h3 className="fw-normal text-muted mb-3">Buy the latest at the Best Price</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link" href="#">
                Learn more
              </a>
              <a className="icon-link" href="#">
                Buy
              </a>
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className=" d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="row">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="custom bg-dark shadow-sm mx-auto" ></div>
          </div>
        
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="custom bg-dark shadow-sm mx-auto" ></div>
          </div>
          </div>
          <div className="row">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="custom bg-dark shadow-sm mx-auto" ></div>
          </div>
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="custom bg-dark shadow-sm mx-auto" ></div>
          </div>
        </div>
        </div>
        {/* More content here */}
      

    </div>
      
  );
}

export default Home;
