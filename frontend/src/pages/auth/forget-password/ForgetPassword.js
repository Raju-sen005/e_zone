import React, { useState } from 'react'
import AnnouncementBar from '../../../components/AnnouncementBar'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';
import ScrollUpButton from '../../../components/ScrollUpButton';
import DrawerMenu from '../../../components/DrawerMenu';
import DrawerCart from '../../../components/DrawerCart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('https://editzone.onrender.com/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || data.message);


            alert(data.message || 'Reset link sent to your email!');
            setEmail('');
        } catch (err) {
            alert(err.message || 'Failed to send reset link. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="body-wrapper">
                <AnnouncementBar />
                <Header />
                {/* <!-- breadcrumb start --> */}
                <div className="breadcrumb">
                    <div className="container">
                        <ul className="list-unstyled d-flex align-items-center m-0">
                            <li><Link to="https://spreethemesprevious.github.io/">Home</Link></li>
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
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- breadcrumb end --> */}

                <main id="MainContent" className="content-for-layout">
                    <div className="login-page mt-100">
                        <div className="container">
                            <form className="login-form common-form mx-auto" onSubmit={handleForgotPassword}>
                                <div className="section-header mb-3">
                                    <h2 className="section-heading text-center">Forget Password</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your registered email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button
                                            className="btn-primary d-block mt-4 btn-signin"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : 'Send Reset Link'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
                <ScrollUpButton />
                <DrawerMenu />
                <DrawerCart />
            </div>
        </>
    )
}

export default ForgetPassword
