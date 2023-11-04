import "../styles/Home.css";
import { Link } from "react-router-dom";
import iPhone from "./../images/Apple/iPhone-home.png";
import iPhone2 from "./../images/Apple/iPhone-home-f.png";
import airpods from "./../images/Apple/Apple-AirPods-Pro.jpg";
// import sTab from './../images/Samsung/Galaxy-tab.avif';
import tradeIn from "./../images/Samsung/sTrade-in.png";
import mac from "./../images/Apple/Mac-Pro.png";
// import tradeIn from './../images/Samsung/trade-in.png';
import microsoft from "./../images/Microsoft/xbox1.png";


function Home() {
  return (
    <div className="Home">
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary product-box">
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
            <Link to={"/Shop"} className="category">
              <span className="buy-shop">Buy</span>
            </Link>
          </div>
        </div>

        <img className="product-device" src={iPhone}></img>
        <img className="product-device product-device-2" src={iPhone2}></img>
        <div class=""></div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="bg-black product-box  text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Apple</h2>
            <p class="lead">Adaptive Audio. Now playing.</p>
          </div>
          <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
            <img
              src={airpods}
              height="500px"
              style={{ position: "relative", top: "-50px" }}
            />
          </div>
          {/* bg-light */}
        </div>
        <div class="product-box  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Shop Consoles</h2>
            <p class="lead">
              Get the latest Galaxy tech that everyone’s talking about.
            </p>
          </div>
          <div class=" mx-auto product">
            <img
              src={microsoft}
              height="700px"
              style={{ position: "relative", top: "-175px" }}
            />
          </div>
        </div>
      </div>

      <div
        class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
        style={{ width: "100%" }}
      >
        <div
          class="product-box bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          style={{ width: "100%" }}
        >
          <div class="my-3 p-3">
            <h2 class="display-5">Trade in</h2>
            <p class="lead">Save on upgrade with a trade in.</p>
          </div>
          <img src={tradeIn} style={{ width: "110%" }} />
        </div>

        <div class="product-box bg-black text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Finance</h2>
            <p class="lead">Finance 24 months at 0% APR.</p>
          </div>
          <div class="bg-body-tertiary my-3 py-3 mx-auto product d-flex justify-content-center">
            <img
              src={mac}
              height="450px"
              style={{ position: "relative", top: "-50px" }}
            />
          </div>
        </div>
      </div>

      <div className="carousel-box bg-body-tertiary d-flex justify-content-center align-items-center">
          <div className="left-windo ">
            <img src='' height='300px'/>
          </div>
          <div className="center-window">
            <img src={airpods}  height='300px'/>
          </div>
          <div className="right-window">
            <img src='' height='300px'/>
          </div>
    </div>

    {/* <div className="carousel-box bg-body-tertiary d-flex justify-content-center align-items-center">
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ctv} alt="First slide" height='300px'/>
          </div>
          <div className="carousel-item">
            <img src={airpods} alt="Second slide"  height='300px'/>
          </div>
          <div className="carousel-item">
            <img src={tradeIn} alt="Second slide"  height='300px'/>
          </div>
          
        </div>
      </div>
    </div> */}

    </div>
  );
}

export default Home;
