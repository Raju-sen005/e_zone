import React, { useRef, useEffect, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Custom arrows defined outside the component
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    ▲
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    ▼
  </div>
);

const ProductGallery = () => {
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const images = [
    `${process.env.PUBLIC_URL}/assets/img/products/edius-5.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/products/edius-2.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/products/edius-3.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/products/edius-4.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/products/edius-1.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/products/edius-6.jpg`,
  ];

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: nav2,
  };

  const thumbSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
    swipeToSlide: true,
    vertical: true,
    infinite: false,
    speed: 300,
    cssEase: "ease",
  };

  return (
    <div className="col-lg-6 col-md-12 col-12">
      <div className="product-gallery product-gallery-vertical d-flex">
        {/* Main Image Slider */}
        <div className="product-img-large" style={{ width: '80%' }}>
          <Slider {...mainSettings} ref={mainSliderRef} className="img-large-slider">
            {images.map((img, i) => (
              <div className="img-large-wrapper" key={i}>
                <a href={img} data-fancybox="gallery">
                  <img src={img} alt={`large-${i}`} style={{ width: '100%' }} />
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Slider */}
        <div
          className="product-img-thumb thumb-slider-container"
          style={{ width: '20%', marginLeft: '10px', position: 'relative' }}
        >
          <Slider {...thumbSettings} ref={thumbSliderRef} className="img-thumb-slider">
            {images.map((img, i) => (
              <div key={i}>
                <div className="img-thumb-wrapper">
                  <img src={img} alt={`thumb-${i}`} style={{ width: '100%', cursor: 'pointer' }} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .product-gallery {
          gap: 10px;
        }

        .img-thumb-wrapper img {
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .img-large-wrapper img {
          border-radius: 6px;
        }

        .thumb-slider-container:hover .custom-arrow {
          opacity: 1;
          visibility: visible;
        }

        .custom-arrow {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          background: black;
          color: white;
          padding: 4px 8px;
          font-size: 14px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease;
          border-radius: 4px;
        }

        .next-arrow {
          top: -20px;
        }

        .prev-arrow {
          bottom: -20px;
        }
      `}</style>
    </div>
  );
};

export default ProductGallery;
