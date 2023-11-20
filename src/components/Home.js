import "../styles/Home.css";
import { Link } from "react-router-dom";
import iPhone from "./../images/Apple/iPhone-home.png";
import iPhone2 from "./../images/Apple/iPhone-home-f.png";
import airpods from "./../images/Apple/Apple-AirPods-Pro.jpg";
import tradeIn from "./../images/Samsung/sTrade-in1.png";
import mac from "./../images/Apple/Mac-Pro.png";
import microsoft from "./../images/Microsoft/xbox1.png";
import laptop from "./../images/Apple/Macbook-pro-front (1).png";
import laptopRs from "./../images/Apple/macbook-prs.png";
import laptopLs from "./../images/Apple/macbook-pls.png";

function Home() {
  return (
    <div className="Home">
      <div className="home-inner-box">
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-body-tertiary product-box ">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold">Later Tech</h1>
            <h3 class="fw-normal text-muted mb-3">
              Get the latest tech at the cheapest price
            </h3>
            <div class="d-flex gap-3 justify-content-center lead fw-normal">
              {/* <a class="icon-link" href="#">
                Learn more
                <svg class="bi"></svg>
              </a> */}
              <Link to={"/Shop"} className="buy-box">
                <span className="buy-shop">Buy</span>
              </Link>
            </div>
          </div>

          <img className="product-device" src={iPhone}></img>
          <img className="product-device product-device-2" src={iPhone2}></img>
          <div class=""></div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="bg-black product-box  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3 text-white">
              <h2 class="display-5 ad-box">Apple</h2>
              <p class="lead">Adaptive Audio. Now playing.</p>
            </div>
            <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
              <img
                src={airpods}
                height="500px"
                style={{ position: "relative", top: "-50px" }}
              />
            </div>
          </div>
          <div class="product-box  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5 ad-box">Shop Consoles</h2>
              <p class="lead">
              The Xbox Series X
              </p>
            </div>
            <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
              <img
                src={microsoft}
                height="675px"
                style={{ position: "relative", top: "-175px" }}
              />
            </div>
          </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class=" product-box  text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5 ad-box">Trade in</h2>
              <p class="lead">Save on upgrades with a trade in.</p>
            </div>
            <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
              <img
                src={tradeIn}
                height="350px"
                style={{ position: "relative", top: "-50px" }}
              />
            </div>
            {/* bg-light */}
          </div>

          <div class="product-box bg-black text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3 text-white">
              <h2 class="display-5 ad-box ">Finance</h2>
              <p class="lead">Finance 24 months at 0% APR.</p>
            </div>
            <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
              <img
                src={mac}
                height="350px"
                style={{ position: "relative", top: "-50px" }}
              />
            </div>
          </div>
        </div>

        <div className="carousel-box bg-body-tertiary d-flex align-items-center">
          <div className="left-window text-center d-flex flex-column align-items-center justify-content-center">
            <h2 className="home-bottom-header">Slim</h2>
            <img src={laptopRs} height="300px" />
          </div>

          <div className="center-window  text-center d-flex flex-column align-items-center justify-content-center">
            <h2 className="home-bottom-header">Powerful</h2>
            <img src={laptop} height="300px" />
          </div>

          <div className="right-window text-center d-flex flex-column align-items-center justify-content-center">
            <h2 className="home-bottom-header">Light</h2>
            <img src={laptopLs} height="300px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
