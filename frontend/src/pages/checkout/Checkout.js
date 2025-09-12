import AnnouncementBar from '../../components/AnnouncementBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollUpButton from '../../components/ScrollUpButton';
import DrawerMenu from '../../components/DrawerMenu';
import DrawerCart from '../../components/DrawerCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { creatOrder } from '../../store/slices/orderSlice';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { fetchCart } from '../../store/slices/cartSlice';

const fields = [
  { label: 'First name', name: 'firstName' },
  { label: 'Last name', name: 'lastName' },
  { label: 'Email address', name: 'email' },
  { label: 'Phone number', name: 'phone' },
  { label: 'Company', name: 'company' },
  { label: 'Country', name: 'country' },
  { label: 'City', name: 'city' },
  { label: 'Zip code', name: 'postalCode' },
  { label: 'Address 1', name: 'addressLine1' },
  { label: 'Address 2', name: 'addressLine2' },
];

const Checkout = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.order);
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // dispatch(saveShipping(data));
    const payload = {
      name: user?.firstName + ' ' + user?.lastName,
      mobileNumber: data?.phone,
      amount: items?.totalAmount
    };

    dispatch(creatOrder(payload))
  };

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />
      {/* <!-- breadcrumb start --> */}
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
            <li>CheckOut</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}
      <main id="MainContent" className="content-for-layout">
        <div className="checkout-page mt-100">
          <div className="container">
            <div className="checkout-page-wrapper">
              <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                  <div className="section-header mb-3">
                    <h2 className="section-heading">Check out</h2>
                  </div>

                  <div className="checkout-progress overflow-hidden">
                    <ol className="checkout-bar px-0" >
                      <li className="progress-step step-done"><Link to="/cart" style={{ textDecoration: "none" }}>Cart</Link></li>
                      {/* <li className="progress-step step-active"><Link to="/checkout" style={{ textDecoration: "none" }}>Your Details</Link></li> */}
                      <li className="progress-step step-todo"><Link to="/checkout" style={{ textDecoration: "none" }}>Shipping</Link></li>
                      <li className="progress-step step-todo"><Link to="/checkout" style={{ textDecoration: "none" }}>Payment</Link></li>
                      <li className="progress-step step-todo"><Link to="/checkout" style={{ textDecoration: "none" }}>Review</Link></li>
                    </ol>
                  </div>

                  <div className="shipping-address-area">
                    <h2 className="shipping-address-heading pb-1">Shipping address</h2>
                    <div className="shipping-address-form-wrapper">
                      {/* <form action="#" className="shipping-address-form common-form">
                        <div className="row">
                          {["First name", "Last name", "Email address", "Phone number", "Company", "Country", "City", "Zip code", "Address 1", "Address 2"].map((label, i) => (
                            <div key={i} className="col-lg-6 col-md-12 col-12">
                              <fieldset>
                                <label className="label">{label}</label>
                                <input type="text" />
                              </fieldset>
                            </div>
                          ))}
                        </div>
                      </form> */}
                      <form className="shipping-address-form common-form">
                        <div className="row">
                          {fields.map(({ label, name }, i) => (
                            <div key={i} className="col-lg-6 col-md-12 col-12">
                              <fieldset>
                                <label className="label">{label}</label>
                                <input
                                  type="text"
                                  {...register(name, { required: true })}
                                />
                                {errors[name] && <small className="text-danger">{label} is required</small>}
                              </fieldset>
                            </div>
                          ))}
                        </div>


                      </form>
                    </div>
                  </div>

                  <div className="shipping-address-area billing-area">
                    <h2 className="shipping-address-heading pb-1">Billing address</h2>
                    <div className="form-checkbox d-flex align-items-center mt-4">
                      <input className="form-check-input mt-0" type="checkbox" />
                      <label className="form-check-label ms-2">
                        Same as shipping address
                      </label>
                    </div>
                  </div>

                  <div className="shipping-address-area billing-area">
                    <div className="minicart-btn-area d-flex align-items-center justify-content-between flex-wrap">
                      <Link to="/cart" className="checkout-page-btn minicart-btn btn-secondary">BACK TO CART</Link>
                      <button
                        className="checkout-page-btn minicart-btn btn-primary"
                        // onClick={handleProceedToShipping}
                        onClick={handleSubmit(onSubmit)}
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'CONTINUE TO PAYMENT'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-12 col-12">
                  <div className="cart-total-area checkout-summary-area">
                    <h3 className="d-none d-lg-block mb-0 text-center heading_24 mb-4">Order summary</h3>
                    {items?.items?.map((item, index) => (
                      <div key={index} className="minicart-item d-flex">
                        <div className="mini-img-wrapper">
                          <img className="mini-img" src={item?.productId?.images[0]?.url} alt={item.name} />
                        </div>
                        <div className="product-info" style={{ textDecoration: "none" }}>
                          <h2 className="product-title">
                            <Link to={item.link}>{item?.productId?.name}</Link>
                          </h2>
                          <p className="product-vendor">₹{item?.productId?.sellPrice} x {item.quantity}</p>
                        </div>
                      </div>
                    ))}

                    <div className="cart-total-box mt-4 bg-transparent p-0">
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
                        <p className="subtotal-value">₹{discount.toFixed(2)}</p>
                      </div> */}
                      <hr />
                      <div className="subtotal-item discount-box">
                        <h4 className="subtotal-title">Total:</h4>
                        <p className="subtotal-value">₹{items?.totalAmount}</p>
                      </div>

                      <div className="mt-4 checkout-promo-code">
                        <input className="input-promo-code" type="text" placeholder="Promo code" />
                        <Link to="/checkout" className="btn-apply-code position-relative btn-secondary text-uppercase mt-3">
                          Apply Promo Code
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
  );
};

export default Checkout;
