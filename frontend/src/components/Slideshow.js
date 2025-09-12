import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const slides = [
  {
    desktop: `${process.env.PUBLIC_URL}/assets/img/slideshow/f1.jpg`,
    mobile: `${process.env.PUBLIC_URL}/assets/img/slideshow/f1-m.jpg`,
    title: "Edius 11",
    subtitle: "COMPLETE PHOTO & VIDEO SOLUTION",
    btnLink: "#"
  }
  // यदि ज़रूरत हो तो और slides जोड़ सकते हैं
];

const Slideshow = () => (
  <div className="slideshow-section position-relative">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="slideshow-active activate-slider"
    >
      {slides.map((s, idx) => (
        <SwiperSlide key={idx} className="slide-item slide-item-bag position-relative">
          <picture>
            <source media="(max-width: 767px)" srcSet={s.mobile} />
            <img
              className="slide-img d-none d-md-block"
              src={s.desktop}
              alt={`slide-${idx}`}
            />
            <img
              className="slide-img d-md-none"
              src={s.mobile}
              alt={`slide-mobile-${idx}`}
            />
          </picture>
          <div className="content-absolute content-slide">
            <div className="container height-inherit d-flex align-items-center justify-content-end">
              <div className="content-box slide-content slide-content-1 py-4">
                <h2
                  className="slide-heading heading_72 animate__animated animate__fadeInUp"
                >
                  {s.title}
                </h2>
                <p className="slide-subheading heading_24 animate__animated animate__fadeInUp">
                  {s.subtitle}
                </p>
                <a
                  className="btn-primary slide-btn animate__animated animate__fadeInUp"
                  href={s.btnLink}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Slideshow;
