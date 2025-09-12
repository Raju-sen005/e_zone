import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [responseColor, setResponseColor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg('');

    try {
      const res = await fetch('https://editzone.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseColor('green');
        setResponseMsg('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setResponseColor('red');
        setResponseMsg('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseColor('red');
      setResponseMsg('Error sending message. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal fade" id="modal-subscribe" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content newsletter-modal-content">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body px-4">
            <form onSubmit={handleSubmit} className="newletter-modal-form common-form mx-auto">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="section-header mb-3">
                    <h4 className="newsletter-modal-heading heading_34">GET IN TOUCH</h4>
                    <hr />
                    <p className="newsletter-modal-misc text_14 mt-4">
                      Contact Us & be the first to hear about exclusive offers, new arrivals & more.
                    </p>
                  </div>

                  <div className="newsletter-input-box align-items-center">
                    <input
                      type="text"
                      name="name"
                      className="mt-2 px-3 form-control"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="mt-2 px-3 form-control"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      className="mt-2 px-3 form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <textarea
                      name="message"
                      rows="3"
                      className="text-custom mt-2 form-control"
                      placeholder="Write your message here*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <button type="submit" className="btn btn-primary d-block mt-2 btn-signin" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'SUBMIT'}
                    </button>
                  </div>

                  {responseMsg && (
                    <p id="responseMsg" style={{ marginTop: '10px', color: responseColor }}>
                      {responseMsg}
                    </p>
                  )}
                </div>

                <div className="col-md-6">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/contact-us-.avif`} className="img-fluid w-100" alt="Contact" />
                  <p className="newsletter-modal-misc text_14 mt-4 text-center pb-2">Follow Us More on:</p>
                  <div className="footer-social-wrapper mt-0 text-center">
                    <ul className="footer-social list-unstyled d-flex align-items-center justify-content-center flex-wrap mb-0">
                      {/* Social icons here */}
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
