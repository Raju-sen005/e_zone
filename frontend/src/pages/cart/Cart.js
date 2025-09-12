import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AnnouncementBar from '../../components/AnnouncementBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollUpButton from '../../components/ScrollUpButton';
import DrawerMenu from '../../components/DrawerMenu';
import DrawerCart from '../../components/DrawerCart';
import { fetchCart } from '../../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const shipping = 0;

  // Load cart from localStorage or fallback to demo cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    } else {
      const demoCart = [
        {
          id: 1,
          name: 'Edius 11',
          price: 1000,
          quantity: 1,
          image: 'assets/img/products/product-1.jpg', // image must be inside public/assets/img/products/
          link: '/edius11',
        }
      ];
      setCart(demoCart);
      localStorage.setItem('cartItems', JSON.stringify(demoCart));
    }
  }, []);

  // Update totals and localStorage when cart changes
  useEffect(() => {
    calculateTotals();
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = () => {
    const sub = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const disc = sub >= 200 ? 0 : 0; // update logic if needed
    setSubtotal(sub);
    setDiscount(disc);
  };

  const changeQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };


  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
              <li>
                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z"
                      fill="#000" />
                  </g>
                </svg>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <main id="MainContent" className="content-for-layout">
          <div className="cart-page mt-100">
            <div className="container">
              <div className="cart-page-wrapper">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12">
                    <table className="cart-table w-100">
                      <tbody>
                        {items?.items?.map((item, index) => {
                          const isSameProduct = cart?.some(cartItem =>
                            cartItem?.id?.toString() === item?.productId?._id?.toString()
                          );


                          return (
                            <tr className="cart-item" key={index}>
                              <td className="cart-item-media">
                                <div className="mini-img-wrapper">
                                  <img
                                    className="mini-img"
                                    src={item?.productId?.images[0].url}
                                    alt={item?.productId?.name}
                                  />
                                </div>
                              </td>
                              <td className="cart-item-details">
                                <h2 className="product-title">
                                  <Link to={item.link} style={{ textDecoration: "none" }}>{item?.productId?.name}</Link>
                                </h2>
                                <p className="product-vendor">Edit Zone</p>
                              </td>
                              <td className="cart-item-quantity">
                                <div className="quantity d-flex align-items-center justify-content-between">
                                  <button className="qty-btn dec-qty" onClick={() => changeQuantity(index, -1)}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/icon/minus.svg`} alt="minus" />
                                  </button>
                                  <input className="qty-input" type="number" value={item.quantity} readOnly />
                                  <button className="qty-btn inc-qty" onClick={() => changeQuantity(index, 1)}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/icon/plus.svg`} alt="plus" />
                                  </button>
                                </div>
                                <button className="product-remove mt-2 m-auto" onClick={() => removeItem(index)} style={{ background: "none" }}>
                                  Remove
                                </button>
                              </td>
                              <td className="cart-item-price text-end">
                                <div className="product-price">₹{(item.productId.sellPrice * item.quantity).toFixed(2)}</div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="col-lg-5 col-md-12 col-12">
                    <div className="cart-total-area">
                      <h3 className="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3>
                      <div className="cart-total-box mt-4">
                        <div className="subtotal-item subtotal-box">
                          <h4 className="subtotal-title">Subtotals:</h4>
                          <p className="subtotal-value">₹{items?.totalAmount}</p>
                        </div>
                        <div className="subtotal-item shipping-box">
                          <h4 className="subtotal-title">Shipping:</h4>
                          <p className="subtotal-value">₹{0}</p>
                        </div>
                        {/* <div className="subtotal-item discount-box">
                          <h4 className="subtotal-title">Discount:</h4>
                          <p className="subtotal-value">₹{0}</p>
                        </div> */}
                        <hr />
                        <div className="subtotal-item total-box">
                          <h4 className="subtotal-title">Total:</h4>
                          <p className="subtotal-value total-value">₹{items?.totalAmount}</p>
                        </div>
                        <p className="shipping_text">Shipping & taxes calculated at checkout</p>
                        <div className="d-flex justify-content-center mt-4">
                          <Link to="/checkout" className="position-relative btn-primary text-uppercase">
                            Proceed to checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
        <DrawerCart />
      </div>
    </>
  );
};

export default Cart;
