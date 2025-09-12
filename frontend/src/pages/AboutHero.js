import React from 'react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <div className="about-hero mt-100">
      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about-hero-content">
              <h2 className="about-hero-title">
                We Provide Expert Service and aim to have a long term with you
              </h2>
              <p className="about-hero-subtitle">
                We provide a full range of front end mechanical repairs for all makes and models of cars, no matter
              </p>
              <ul className="about-hero-action p-0">
                {/* Item 01 */}
                <li className="action-item d-flex">
                  <div className="action-count">01</div>
                  <div className="action-content">
                    <h4 className="action-title">
                      <Link to="/" style={{textDecoration:"none"}}>Get A Quote</Link>
                    </h4>
                    <p className="action-subtitle">
                      Through True Rich Attended does no end it his mother since real had half every.
                    </p>
                  </div>
                </li>
                {/* Item 02 */}
                <li className="action-item d-flex">
                  <div className="action-count">02</div>
                  <div className="action-content">
                    <h4 className="action-title">
                      <Link to="/" style={{textDecoration:"none"}}>Book An Appointment</Link>
                    </h4>
                    <p className="action-subtitle">
                      Through True Rich Attended does no end it his mother since real.
                    </p>
                  </div>
                </li>
                {/* Item 03 */}
                <li className="action-item d-flex">
                  <div className="action-count">03</div>
                  <div className="action-content">
                    <h4 className="action-title">
                      <Link to="/" style={{textDecoration:"none"}}>Get Your Service Done</Link>
                    </h4>
                    <p className="action-subtitle">
                      Ecstatic unsatiable saw his giving Remain expense you position concluded.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about-hero-img">
              <img src={`${process.env.PUBLIC_URL}/assets/img/about/about-hero.jpg`} alt="About Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
