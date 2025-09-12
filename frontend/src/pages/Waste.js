import React from 'react'
import { Link } from 'react-router-dom';

const Waste = () => {
    return (
        <>
            <div className="slideshow-section position-relative d-none">
                <div className="slideshow-active activate-slider" data-slick='{
                    "slidesToShow": 1, 
                    "slidesToScroll": 1, 
                    "dots": true,
                    "arrows": true,
                    "responsive": [
                        {
                        "breakpoint": 768,
                        "settings": {
                            "arrows": false
                        }
                        }
                    ]
                }'>
                    <div className="slide-item slide-item-bag position-relative">
                        <img className="slide-img d-none d-md-block" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1.jpg`} alt="slide-1" />
                        <img className="slide-img d-md-none" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1-m.jpg`} alt="slide-1" />
                        <div className="content-absolute content-slide">
                            <div className="container height-inherit d-flex align-items-center justify-content-end">
                                <div className="content-box slide-content slide-content-1 py-4">
                                    <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        Edius 11
                                    </h2>
                                    <p className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        COMPLETE PHOTO & VIDEO SOLUTION
                                    </p>
                                    <Link className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                        href="#"
                                        data-animation="animate__animated animate__fadeInUp">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-item slide-item-bag position-relative">
                        <img className="slide-img d-none d-md-block" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1.jpg`} alt="slide-1" />
                        <img className="slide-img d-md-none" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1-m.jpg`} alt="slide-1" />
                        <div className="content-absolute content-slide">
                            <div className="container height-inherit d-flex align-items-center justify-content-end">
                                <div className="content-box slide-content slide-content-1 py-4">
                                    <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        Edius 11
                                    </h2>
                                    <p className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        COMPLETE PHOTO & VIDEO SOLUTION
                                    </p>
                                    <Link className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                        href="#"
                                        data-animation="animate__animated animate__fadeInUp">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="slide-item slide-item-bag position-relative">
                        <img className="slide-img d-none d-md-block" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1.jpg`} alt="slide-1" />
                        <img className="slide-img d-md-none" src={`${process.env.PUBLIC_URL}/assets/img/slideshow/f1-m.jpg`} alt="slide-1" />
                        <div className="content-absolute content-slide">
                            <div className="container height-inherit d-flex align-items-center justify-content-end">
                                <div className="content-box slide-content slide-content-1 py-4">
                                    <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        Edius 11
                                    </h2>
                                    <p className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                        data-animation="animate__animated animate__fadeInUp">
                                        COMPLETE PHOTO & VIDEO SOLUTION
                                    </p>
                                    <Link className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                        href="#"
                                        data-animation="animate__animated animate__fadeInUp">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="activate-arrows"></div>
                <div className="activate-dots dot-tools"></div>
            </div>
        </>
    )
}

export default Waste
