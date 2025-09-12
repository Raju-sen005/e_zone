import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPromotion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="promotional-area mt-100">
      <div className="row g-0 justify-content-center">

        {/* Promotion 1 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="300">
          <div className="promotional-item overlay-blue">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about/p1.jpg`} alt="Promotion 1" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title">
                  Serve our customers and always deliver the customer service
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion 2 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700">
          <div className="promotional-item overlay-black">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about/p2.jpg`} alt="Promotion 2" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title">
                  To be the world’s most leader in automotive business solutions.
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion 3 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="promotional-item overlay-yellow">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about/p3.jpg`} alt="Promotion 3" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title" style={{
                  fontSize: "32px",
                  color: "#fff",
                  fontFamily: 'Poppins ,sans-serif'
                }}>
                  We value the service we provide and our loyal returning customers
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Inline styles if needed */}
      <style>{`
        .promotional-area {
          padding-top: 60px;
          padding-bottom: 60px;
        }
        .promotional-item {
          position: relative;
          overflow: hidden;
        }
        .promotional-item img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .promotional-absolute {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.4);
        }
        .promo-title {
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .promo-subtitle {
          color: #f0f0f0;
          font-size:18px;
        }
        .overlay-blue .promotional-absolute {
          background-color: rgba(0, 123, 255, 0.5);
        }
        .overlay-black .promotional-absolute {
          background-color: rgba(0, 0, 0, 0.6);
        }
        .overlay-yellow .promotional-absolute {
          background-color: rgba(255, 193, 7, 0.5);
        }
      `}</style>
    </div>
  );
};

export default AboutPromotion;
