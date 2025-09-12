import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ProductQuickviewModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const {
    id,
    name,
    price,
    comparePrice,
    images = [],
    rating = 0,
    ratingCount = 0,
  } = product;

  const handleAddToCart = (productName) => {
    // Add your cart logic here
    alert(`Added ${productName} to cart`);
  };

  const ratingStars = Array.from({ length: 5 }, (_, i) => {
    const fillColor = i < rating ? '#FFAE00' : '#B2B2B2';
    return (
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" key={i}>
        <path
          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
          fill={fillColor}
        />
      </svg>
    );
  });

  const largeSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumb-slider',
  };

  const thumbSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    arrows: true,
    asNavFor: '.large-slider',
  };

  return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {/* Image Gallery */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-gallery product-gallery-vertical d-flex">
                  <div className="product-img-large">
                    <Slider {...largeSliderSettings} className="large-slider">
                      {images.map((image, index) => (
                        <div className="img-large-wrapper" key={index}>
                          <img src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`} alt={name} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="product-img-thumb ms-3">
                    <Slider {...thumbSliderSettings} className="thumb-slider">
                      {images.map((image, index) => (
                        <div key={index}>
                          <div className="img-thumb-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/products/${image}`} alt={name} />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-details ps-lg-4">
                  <div className="mb-3">
                    <span className="product-availability">In Stock</span>
                  </div>
                  <h2 className="product-title mb-3">{name}</h2>
                  <div className="product-rating d-flex align-items-center mb-3">
                    <span className="star-rating d-flex">{ratingStars}</span>
                    <span className="rating-count ms-2">({ratingCount})</span>
                  </div>
                  <div className="product-price-wrapper mb-4">
                    <span className="product-price regular-price">₹{price}</span>
                    {comparePrice && (
                      <del className="product-price compare-price ms-2">₹{comparePrice}</del>
                    )}
                  </div>
                  <div className="misc d-flex align-items-end justify-content-between mt-4">
                    <div className="quantity d-flex align-items-center">
                      <button className="qty-btn dec-qty">-</button>
                      <input className="qty-input" type="number" defaultValue="1" min="1" />
                      <button className="qty-btn inc-qty">+</button>
                    </div>
                    <div className="message-popup d-flex align-items-center">
                      <span className="message-popup-icon">Message</span>
                    </div>
                  </div>
                  <div className="product-form-buttons d-flex align-items-center justify-content-between mt-4">
                    <button
                      className="btn-atc btn-add-to-cart"
                      onClick={() => handleAddToCart(name)}
                    >
                      ADD TO CART
                    </button>
                    <button className="product-wishlist">Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickviewModal;
