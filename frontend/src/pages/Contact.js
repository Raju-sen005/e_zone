import React, { useState } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Breadcrumb from './Breadcrumb';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://editzone.onrender.com/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />
       {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
              <li>
                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" />
                  </g>
                </svg>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      <main id="MainContent" className="content-for-layout">
        <div className="contact-page">
          <div className="contact-box mt-100">
            <div className="contact-box-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                         <svg width="50" height="45" viewBox="0 0 50 45" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.5 0.25V28.25H7.5V37.1641L10.3438 34.8672L18.6016 28.25H35.5V0.25H0.5ZM4 3.75H32V24.75H17.3984L16.9062 25.1328L11 29.8359V24.75H4V3.75ZM39 7.25V10.75H46V31.75H39V36.8359L32.6016 31.75H19.4766L15.1016 35.25H31.3984L42.5 44.1641V35.25H49.5V7.25H39Z"
                                                    fill="#00234D" />
                                            </svg>
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Mail Address</h2>
                        <Link className="contact-info" href="mailto:support@editzone.in">support@editzone.in</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                         <svg width="36" height="42" viewBox="0 0 36 42" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 0.265625L16.4141 4.09375L2.41406 37.3438L0.828125 41.0625L4.60156 39.6406L18 34.6094L31.3984 39.6406L35.1719 41.0625L33.5859 37.3438L19.5859 4.09375L18 0.265625ZM18 9.17969L28.8281 34.9375L18.6016 31.1094L18 30.8906L17.3984 31.1094L7.17188 34.9375L18 9.17969Z"
                                                    fill="#00234D" />
                                            </svg>
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Office Location</h2>
                        <p className="contact-info">Hall No.- 1, Rama Kripa (Ruchika) Complex, Kisan Marg, Tonk Road, Jaipur, Rajasthan – 302015 (India)</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                       <svg width="46" height="47" viewBox="0 0 46 47" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.149 0.75C9.23299 0.75 8.33065 1.07812 7.5787 1.67969L7.46932 1.73438L7.41463 1.78906L1.94588 7.42188L2.00057 7.47656C0.312094 9.03516 -0.207437 11.3662 0.524009 13.3828C0.530844 13.3965 0.517173 13.4238 0.524009 13.4375C2.00741 17.6826 5.80135 25.8789 13.2115 33.2891C20.649 40.7266 28.9547 44.3701 33.0631 45.9766H33.1178C35.2437 46.6875 37.5474 46.1816 39.1881 44.7734L44.7115 39.25C46.1607 37.8008 46.1607 35.2852 44.7115 33.8359L37.6021 26.7266L37.5474 26.6172C36.0982 25.168 33.5279 25.168 32.0787 26.6172L28.5787 30.1172C27.314 29.5088 24.2994 27.9502 21.4146 25.1953C18.5504 22.4609 17.0875 19.3164 16.5474 18.0859L20.0474 14.5859C21.5172 13.1162 21.5445 10.6689 19.9928 9.22656L20.0474 9.17188L19.8834 9.00781L12.8834 1.78906L12.8287 1.73438L12.7193 1.67969C11.9674 1.07812 11.065 0.75 10.149 0.75ZM10.149 4.25C10.2789 4.25 10.4088 4.31152 10.5318 4.41406L17.5318 11.5781L17.6959 11.7422C17.6822 11.7285 17.7984 11.9131 17.5865 12.125L13.2115 16.5L12.3912 17.2656L12.774 18.3594C12.774 18.3594 14.7838 23.7393 19.0084 27.7656L19.3912 28.0938C23.4586 31.8057 28.2506 33.8359 28.2506 33.8359L29.3443 34.3281L34.5396 29.1328C34.8404 28.832 34.7857 28.832 35.0865 29.1328L42.2506 36.2969C42.5514 36.5977 42.5514 36.4883 42.2506 36.7891L36.8912 42.1484C36.0846 42.8389 35.2301 42.9824 34.2115 42.6406C30.2467 41.082 22.5426 37.6982 15.6724 30.8281C8.74764 23.9033 5.13143 16.0488 3.80526 12.2344C3.53866 11.5234 3.73006 10.4707 4.35213 9.9375L4.46151 9.82812L9.7662 4.41406C9.88924 4.31152 10.0191 4.25 10.149 4.25Z"
                                                    fill="#00234D" />
                                            </svg>
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Phone Number</h2>
                        <Link className="contact-info" href="tel:+919214269668">(+91) – 92142-69668</Link>
                        <Link className="contact-info" href="tel:+919983417104">(+91) – 99834-17104</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section mt-100">
            <div className="container">
              <div className="contact-form-area">
                <div className="section-header mb-4">
                  <h2 className="section-heading">Drop us a line</h2>
                  <p className="section-subheading">We would like to hear from you.</p>
                </div>

                <div className="contact-form--wrapper">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="name" placeholder="Full name" required value={formData.name} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="email" name="email" placeholder="Email Address*" required value={formData.email} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="subject" placeholder="Type a subject" value={formData.subject} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-12">
                        <fieldset>
                          <textarea name="message" cols="20" rows="6" placeholder="Write your message here*" required value={formData.message} onChange={handleChange}></textarea>
                        </fieldset>
                        <button type="submit" className="position-relative review-submit-btn contact-submit-btn">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
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

export default Contact;
