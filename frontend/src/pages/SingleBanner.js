import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const banners = [
    `${process.env.PUBLIC_URL}/assets/img/banner/banner-1.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/banner/banner-2.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/banner/banner-3.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/banner/banner-4.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/banner/banner-5.jpg`,
  ];

  return (
    <div className="slider-section" style={{ padding: '30px 0' }}>
      <div className="container">
        <div className="slider-hover-wrapper">
          <Slider {...settings}>
            {banners.map((src, index) => (
              <div key={index} data-aos="fade-up" data-aos-duration="700">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Inline style or move to external CSS */}
      <style>{`
        .slider-hover-wrapper .slick-prev,
        .slider-hover-wrapper .slick-next {
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .slider-hover-wrapper:hover .slick-prev,
        .slider-hover-wrapper:hover .slick-next {
          opacity: 1;
        }

        .slick-prev:before,
        .slick-next:before {
          color: black;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
