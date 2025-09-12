import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductImageGallery = ({ selectedProduct, largeSliderSettings, thumbSliderSettings }) => {
  const mainSliderRef = useRef(null);

  if (!selectedProduct?.images) return null;

  const handleNext = () => {
    mainSliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    mainSliderRef.current?.slickPrev();
  };

  return (
    <div className="col-lg-6 col-md-12 col-12">
      <div className="product-gallery product-gallery-vertical d-flex position-relative">
        {/* Main Image Slider */}
        <div className="product-img-large" style={{ width: '80%' }}>
          <Slider {...largeSliderSettings} className="large-slider" ref={mainSliderRef}>
            {selectedProduct.images.map((image, index) => (
              <div className="img-large-wrapper" key={index}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`} alt={selectedProduct.name} style={{ width: '100%' }} />
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="slider-nav-buttons d-flex justify-content-between mt-2">
            <button onClick={handlePrev} className="btn btn-outline-dark btn-sm">← Prev</button>
            <button onClick={handleNext} className="btn btn-outline-dark btn-sm">Next →</button>
          </div>
        </div>

        {/* Thumbnail Slider */}
        <div className="product-img-thumb ms-3" style={{ width: '20%' }}>
          <Slider {...thumbSliderSettings} className="thumb-slider">
            {selectedProduct.images.map((image, index) => (
              <div className="img-thumb-wrapper" key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`}
                  alt={`${selectedProduct.name}-${index}`}
                  style={{ width: '100%', cursor: 'pointer', borderRadius: '4px' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .slider-nav-buttons button {
          margin-top: 10px;
          width: 48%;
        }
      `}</style>
    </div>
  );
};

export default ProductImageGallery;
