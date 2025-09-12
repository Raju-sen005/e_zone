// DrawerMenu.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import { Link } from 'react-router-dom';

const DrawerMenu = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('userData'));
      setUserEmail(user?.email || null);
    } catch (err) {
      console.error('Invalid user data', err);
      setUserEmail(null);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('userData');
    setUserEmail(null);
  };

  return (
    <div className="offcanvas offcanvas-start d-flex d-lg-none" tabIndex="-1" id="drawer-menu">
      <div className="offcanvas-wrapper">
        <div className="offcanvas-header border-btm-black">
          <h5 className="drawer-heading">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0 d-flex flex-column justify-content-between">
          <nav className="site-navigation">
            <ul className="main-menu list-unstyled">
              {/* Repeat this pattern for all menu items */}
              <li className="menu-list-item nav-item has-dropdown active">
                <div className="mega-menu-header">
                  <Link className="nav-link active" href="index.html">Home</Link>
                </div>
              </li>
              {/* Edius 11 */}
              <li className="menu-list-item nav-item has-dropdown">
                <div className="mega-menu-header">
                  <Link className="nav-link active" href="edius11.html">Edius 11</Link>
                </div>
              </li>
              {/* Product submenu */}
              <li className="menu-list-item nav-item has-dropdown">
                <div className="mega-menu-header">
                  <Link className="nav-link active" href="/">Product</Link>
                  <span className="open-submenu">
                    <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="submenu-transform submenu-transform-desktop">
                  <div className="offcanvas-header border-btm-black">
                    <h5 className="drawer-heading btn-menu-back d-flex align-items-center">
                      <svg className="icon icon-menu-back" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      <span className="menu-back-text">Product</span>
                    </h5>
                  </div>
                  <ul className="submenu list-unstyled">
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="album-sense.html">Album Sense</Link></li>
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="cut-sense.html">Cut Sense</Link></li>
                  </ul>
                </div>
              </li>
              {/* About submenu */}
              <li className="menu-list-item nav-item has-dropdown">
                <div className="mega-menu-header">
                  <Link className="nav-link active" href="/">About</Link>
                  <span className="open-submenu">
                    <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="submenu-transform submenu-transform-desktop">
                  <div className="offcanvas-header border-btm-black">
                    <h5 className="drawer-heading btn-menu-back d-flex align-items-center">
                      <svg className="icon icon-menu-back" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      <span className="menu-back-text">About</span>
                    </h5>
                  </div>
                  <ul className="submenu list-unstyled">
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="video-editing.html">Video Editing</Link></li>
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="gallery.html">Events & Gallery</Link></li>
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="download.html">Downloads</Link></li>
                    <li className="menu-list-item nav-item-sub"><Link className="nav-link-sub nav-text-sub" href="blog.html">Our Blog</Link></li>
                  </ul>
                </div>
              </li>
              {/* Contact */}
              <li className="menu-list-item nav-item"><Link className="nav-link" href="contact.html">Contact</Link></li>
            </ul>
          </nav>

          <ul className="utility-menu list-unstyled">
            <li className="utilty-menu-item">
              <Link to="tel:+1-078-2376" className="announcement-text">
                <span className="utilty-icon-wrapper">
                  {/* Phone icon SVG */}
                </span>
                Call: +1 078 2376
              </Link>
            </li>

            <li className="utilty-menu-item">
              {userEmail ? (
                <Link to="/" onClick={handleLogout} className="announcement-login announcement-text">
                  <span className="utilty-icon-wrapper">{/* user svg */}</span>
                  Logout
                </Link>
              ) : (
                <Link to="login.html" className="announcement-login announcement-text">
                  <span className="utilty-icon-wrapper">{/* user svg */}</span>
                  Login
                </Link>
              )}
            </li>

            <li className="utilty-menu-item">
              <Link to="wishlist.html" className="header-action-item header-wishlist">
                <span className="utilty-icon-wrapper">{/* wishlist svg */}</span>
                My wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
