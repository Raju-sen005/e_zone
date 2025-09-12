import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div class="shop-category mt-100 overflow-hidden">
      <div class="collection-tab-inner mt-0">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="section-heading primary-color">Our Services</h2>
          </div>

          <div class="shop-category-2 shop-category-inner">
            <div class="scattered-item" data-aos="fade-up" data-aos-duration="700">
              <div class="scattered-wrapper">
                <div class="scattered-content">
                  <img class="scattered-img" src={`${process.env.PUBLIC_URL}/assets/img/products/1.jpg`} alt="img" />
                </div>
                <div class="scattered-details">
                  <h2><a class="scattered-heading primary-color"
                    href="/video-editing" style={{ textDecoration: "none", fontWeight: "900" }}>Training Classes</a></h2>
                  <p class="text_12 d-block primary-color mt-2">
                    Video Editing</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Photo Editing</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Projects Creations</p>

                </div>
              </div>
            </div>
            <div class="scattered-item" data-aos="fade-up" data-aos-duration="700">
              <div class="scattered-wrapper">
                <div class="scattered-content">
                  <img class="scattered-img" src={`${process.env.PUBLIC_URL}/assets/img/products/2.jpg`} alt="img" />
                </div>
                <div class="scattered-details">
                  <h2><a class="scattered-heading primary-color" href="#" style={{ textDecoration: "none", fontWeight: "900" }}>EXHIBITIONS</a></h2>
                  <p class="text_12 d-block primary-color mt-2">
                    Photography Workshop</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Editing Workshop</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Show In Your City</p>
                </div>
              </div>
            </div>

            <div class="scattered-item" data-aos="fade-up" data-aos-duration="700">
              <div class="scattered-wrapper">
                <div class="scattered-content">
                  <img class="scattered-img" src={`${process.env.PUBLIC_URL}/assets/img/products/3.jpg`} alt="img" />
                </div>
                <div class="scattered-details">
                  <h2><a class="scattered-heading primary-color" href="#" style={{ textDecoration: "none", fontWeight: "900" }}>Events</a></h2>
                  <p class="text_12 d-block primary-color mt-2">
                    Weddings</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Album Shoot</p>

                  <p class="text_12 d-block primary-color mt-2">
                    Promotional Shoot</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default OurServices