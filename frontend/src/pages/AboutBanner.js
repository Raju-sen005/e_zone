import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
  return (
    <div className="about-banner mt-100" data-aos="fade-up" data-aos-duration="700">
      <div className="container">
        <div className="about-banner-wrapper">
          <div className="about-banner-content">
            <p className="about-banner-text heading_48">
              Get in touch with us for your service related query
            </p>
            <Link to="/contact" className="about-banner-btn" style={{textDecoration:"none"}}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;