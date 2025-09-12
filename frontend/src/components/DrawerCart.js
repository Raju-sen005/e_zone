// DrawerCart.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/js/dist/offcanvas';
import { Link } from 'react-router-dom';

const DrawerCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(saved);
  }, []);

  // Watch storage events (e.g. other tabs)
  useEffect(() => {
    const onStorage = () => {
      const saved = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(saved);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Save cart to localStorage when changed
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const changeQty = (name, delta) => {
    setCartItems(items =>
      items
        .map(item =>
          item.name === name ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const totalQty = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  // Helpers: price / image / link lookup
  const productData = {
    'Edius 11': {
      price: 1000,
      image: 'assets/img/products/grass-valley-edius-11.png',
      link: 'edius11.html',
    },
    'Album Sense': {
      price: 1529,
      image: 'assets/img/products/insidelogic-album-sense.png',
      link: 'album-sense.html',
    },
    'Cut Sense': {
      price: 1529,
      image: 'assets/img/products/cut.png',
      link: 'cut-sense.html',
    },
    'Gold Projects Edit Zone': {
      price: 1529,
      image: 'assets/img/products/edit-zone-gold-projects.png',
      link: 'gold-project.html',
    },
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="drawer-cart">
      <div className="offcanvas-header border-btm-black">
        <h5 className="cart-drawer-heading text_16">
          Your Cart (<span id="cart-count">{totalQty}</span>)
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body p-0">
        {cartItems.length > 0 ? (
          <div className="cart-content-area d-flex justify-content-between flex-column">
            <div className="minicart-loop custom-scrollbar" id="cart-items-container">
              {cartItems.map(item => (
                <div key={item.name} className="minicart-item d-flex">
                  <div className="mini-img-wrapper">
                    <img className="mini-img" src={item.image} alt={item.name} />
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <Link to={item.link}>{item.name}</Link>
                    </h2>
                    <div className="misc d-flex align-items-end justify-content-between">
                      <div className="quantity d-flex align-items-center justify-content-between">
                        <button
                          className="qty-btn dec-qty"
                          onClick={() => changeQty(item.name, -1)}
                        >
                          <img src={`${process.env.PUBLIC_URL}/assets/img/icon/minus.svg`} alt="minus" />
                        </button>
                        <input
                          className="qty-input"
                          type="number"
                          readOnly
                          value={item.quantity}
                        />
                        <button
                          className="qty-btn inc-qty"
                          onClick={() => changeQty(item.name, +1)}
                        >
                          <img src={`${process.env.PUBLIC_URL}/assets/img/icon/plus.svg`} alt="plus" />
                        </button>
                      </div>
                      <div className="product-remove-area d-flex flex-column align-items-end">
                        <div className="product-price">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="product-remove btn btn-link p-0"
                          onClick={() => changeQty(item.name, -item.quantity)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="minicart-footer">
              <div className="minicart-calc-area">
                <div className="minicart-calc d-flex align-items-center justify-content-between">
                  <span className="cart-subtotal mb-0">Subtotal</span>
                  <span className="cart-subprice" id="cart-subtotal">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="cart-taxes text-center my-4">
                  Taxes and shipping will be calculated at checkout.
                </p>
              </div>
              <div className="minicart-btn-area d-flex align-items-center justify-content-between">
                <Link to="cart.html" className="minicart-btn btn-secondary">
                  View Cart
                </Link>
                <Link to="checkout.html" className="minicart-btn btn-primary">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty-area text-center py-5" id="cart-empty">
            <div className="cart-empty-icon pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <p className="cart-empty">You have no items in your cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawerCart;
