import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerMenu from '../components/DrawerMenu'
import DrawerCart from '../components/DrawerCart'
import { Link } from 'react-router-dom'

const Faq = () => {
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
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
        {/* <!-- breadcrumb end --> */}

        <main id="MainContent" className="content-for-layout">
            <div className="faq-section mt-100 overflow-hidden">
                <div className="faq-inner">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-heading">Frequently Asked Question</h2>
                            <p className="section-subheading">All your questions about Axion answered </p>
                        </div>
                        <div className="faq-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Is Bisum a safe investment?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq2">
                                            How do I set up a crypto wallet?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq3">
                                            Where and how do I buy Bisum?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq4">
                                            What often will results be reported?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq5">
                                            How can I get support?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq6">
                                            Is Axion available on a major Product exchange?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq6" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Is Bisum a safe investment?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq2">
                                            How do I set up a crypto wallet?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq3">
                                            Where and how do I buy Bisum?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq4">
                                            What often will results be reported?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq5">
                                            How can I get support?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="faq-item rounded">
                                        <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" data-bs-target="#faq6">
                                            Is Axion available on a major Product exchange?
                                            <span className="faq-heading-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="icon icon-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </h2>
                                        <div id="faq6" className="accordion-collapse collapse">
                                            <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                                Sit repellat
                                                quod facere illo esse cumque inventore veniam necessitatibus totam
                                                repudiandae. Hic rerum animi modi sed?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-all text-center" data-aos="fade-up" data-aos-duration="700">
                                <a className="btn-primary" href="faq.html">SEE MORE</a>
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
  )
}

export default Faq
