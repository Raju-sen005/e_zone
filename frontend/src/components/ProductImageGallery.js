import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductImageGallery = ({ selectedProduct, largeSliderSettings, thumbSliderSettings }) => {
  const mainSliderRef = useRef(null);

  if (!selectedProduct?.images) return null;

  const handleThumbClick = (index) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="product-gallery product-gallery-vertical d-flex">
      {/* Main Image Slider */}
      <div className="product-img-large" style={{ width: '80%' }}>
        <Slider
          {...largeSliderSettings}
          ref={(slider) => (mainSliderRef.current = slider)}
          className="large-slider"
        >
          {selectedProduct.images.map((image, index) => (
            <div className="img-large-wrapper" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`}
                alt={`${selectedProduct.name}-${index}`}
                style={{ width: '100%', borderRadius: '6px' }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Slider */}
      <div className="product-img-thumb ms-3" style={{ width: '20%' }}>
        <Slider {...thumbSliderSettings} className="thumb-slider">
          {selectedProduct.images.map((image, index) => (
            <div className="img-thumb-wrapper" key={index} onClick={() => handleThumbClick(index)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`}
                alt={`${selectedProduct.name}-thumb-${index}`}
                style={{ width: '100%', cursor: 'pointer', borderRadius: '4px', marginBottom: '10px' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImageGallery;
