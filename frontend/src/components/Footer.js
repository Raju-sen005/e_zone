// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-100 overflow-hidden footer-style-2" >
      <div className="footer-top bg-5">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              {[
                {
                  title: 'About',
                  links: [
                    { label: 'About us', to: '/about-us' },
                    { label: 'Training Classes', to: '/video-editing' },
                    { label: 'Exhibitions', to: '/video-editing' },
                    { label: 'Blog', to: '/blog' }
                  ]
                },
                {
                  title: 'Product',
                  links: [
                    { label: 'Edius 11', to: '/edius11' },
                    { label: 'Album Sense', to: '/album-sense' },
                    { label: 'Cut Sense', to: '/cut-sense' }
                  ]
                },
                {
                  title: 'Help',
                  links: [
                    { label: 'FAQ', to: '/faq' },
                    { label: 'Contact', to: '/contact' },
                    { label: 'Download', to: '/downloads' }
                  ]
                }
              ].map((section, idx) => (
                <div className="col-xl-2 col-lg-2 col-md-6 col-12 footer-widget" key={idx}>
                  <div className="footer-widget-inner">
                    <h4 className="footer-heading d-flex align-items-center justify-content-between">
                      <span>{section.title}</span>
                      <span className="d-md-none">
                        {/* dropdown icon */}
                        <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="#00234D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </h4>
                    <ul className="footer-menu list-unstyled mb-0 d-md-block">
                      {section.links.map((link, i) => (
                        <li className="footer-menu-item" key={i}>
                          <Link to={link.to}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-xl-4 col-lg-5 col-md-6 col-12 footer-widget">
                <div className="footer-widget-inner">
                  <h4 className="footer-logo">
                    <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="Logo" /></Link>
                  </h4>
                  <div className="footer-newsletter">
                    <p className="footer-text mb-3">Stay up to date with all the news.</p>
                    <div className="newsletter-wrapper">
                      <form action="#" className="footer-newsletter-form d-flex align-items-center">
                        <input className="footer-newsletter-input bg-transparent" type="email" placeholder="Your e-mail" autoComplete="off"/>
                        <button className="footer-newsletter-btn" type="submit">SIGN UP</button>
                      </form>
                    </div>
                    <div className="footer-social-wrapper">
                      <ul className="footer-social list-unstyled d-flex align-items-center flex-wrap mb-0">
                        {/* Repeat for each social icon */}
                        {['twitter','facebook','instagram','tiktok','youtube'].map((platform, i) => (
                          <li className="footer-social-item" key={i}>
                            <Link to="/">
                              <svg className={`icon icon-${platform}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                                {/* Insert platform-specific path here */}
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-5">
        <div className="container">
          <div className="footer-bottom-inner d-flex flex-wrap justify-content-md-between justify-content-center align-items-center">
            <ul className="footer-bottom-menu list-unstyled d-flex flex-wrap align-items-center mb-0">
              <li className="footer-menu-item"><Link to="/privacy-policy">Privacy policy</Link></li>
              <li className="footer-menu-item"><Link to="/terms-condition">Terms & Conditions</Link></li>
            </ul>
            <p className="copyright footer-text">©<span className="current-year">{new Date().getFullYear()}</span> Edit Zone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;