import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/index.css";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-md navbar-dark d-flex justify-content-center">
          <div>
            <a href="/" className="navbar-brand text-white ms-5">
              <span className="fs-1 fw-bold">AuraFest</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Carousel */}
      <div className="container-fluid p-0 bg-white">
        <div className="row g-0 p-0">
          <div className="col g-0">
            <div
              id="mycarousel"
              className="carousel slide carousel-fade position-relative"
              data-bs-ride="carousel"
            >
              {/* Carousel Items */}
              <div className="carousel-inner">
                {["bg-image-1", "bg-image-2", "bg-image-3", "bg-image-4"].map(
                  (image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${image} ${
                        index === 0 ? "active" : ""
                      }`}
                      data-bs-interval="2000"
                    >
                      <div className="overlay"></div>
                      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-3 fw-bold text-white text-center">
                          Plan. Create. Celebrate -<br />
                          Your Dream Event Awaits!
                        </h1>
                        <button
                          className="custom-login-btn text-decoration-none mt-4"
                          onClick={() => (window.location.href = "/login")}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev position-absolute"
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide="prev"
                aria-label="Previous"
              >
                <span
                  className="carousel-control-prev-icon hover-effect"
                  aria-hidden="true"
                ></span>
              </button>

              <button
                className="carousel-control-next position-absolute"
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide="next"
                aria-label="Next"
              >
                <span
                  className="carousel-control-next-icon hover-effect"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
