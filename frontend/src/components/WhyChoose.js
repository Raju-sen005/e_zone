import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h1 style={{ fontWeight: "700",fontFamily:"Poppins, sans-serif" }}>Why Choose We ?</h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/products/1.jpg`}
              className="whychoose-img"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1200"
            />
          </div>

          <div className="col-lg-6 pt-5">
            <p
              className="text_16 trusted-subheading trusted-subheading-2 pb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{fontFamily:"Poppins, sans-serif"}}
            >
              Edit Zone Develop Video & Photo Designing Software’s which Helps Wedding Photographers
              to edit their wedding film editing in very easily with less time. Edit Zone develop
              projects for Edius Software and Edius Pro is best perfect finishing tool for wedding
              video and also for documentary, news, corporate and studio.            </p>

            <h5 style={{fontWeight:"700", fontSize:"20px"}}data-aos="fade-up" data-aos-duration="1100">
              Edit Zone Created A Projects Bundle Pack – Edit Zone Gold Projects
            </h5>

            <p
              className="text_16 trusted-subheading trusted-subheading-2 pb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              style={{fontFamily:"Poppins, sans-serif"}}

            >
              Edit Zone Gold are ready made video projects. It’s a home production of Edit Zone. Edius
              Gold with Choose’A Effect – Transitions & Filters. We are serving in Edit Zone Gold
              Projects series with ready made all functions projects. You will find a variety of
              readymade projects – Wedding Reels, Teaser, Wedding Highlights, Portrait Songs,
              Cinematic Title, Birthday Highlights, Pre-weddings, Pre-wedding teaser, Save the date,
              Studio Logos, Online Vidhi projects and lots of editing utilities with unlimited video
              backgrounds, effects, music and Luts. Edius Gold is compatible with all versions of
              Edius Software.
            </p>

            <h5 style={{fontWeight:"700", fontSize:"20px",fontFamily:"Poppins, sans-serif"}}data-aos="fade-up" data-aos-duration="1300">
              Video & Photo Designing Software’s
            </h5>

            <p
              className="text_16 trusted-subheading trusted-subheading-2 pb-3"
              data-aos="fade-up"
              data-aos-duration="1400"
              style={{fontFamily:"Poppins, sans-serif"}}
            >
              We have all elements, effects & graphics for make your cinematic wedding more
              attractive. This is all ready to use Edius Wedding Projects. In just few mins you can
              ready your own wedding highlights & teaser.
            </p>

            <h6 style={{fontWeight:"700", fontSize:"16px",fontFamily:"Poppins, sans-serif"}} data-aos="fade-up" data-aos-duration="1500">
              Edit Zone is authorized reseller of Grass Valley Edius and for Edit Zone Gold Projects
              Edit Zone has ©copyright to sell projects in all over India
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
