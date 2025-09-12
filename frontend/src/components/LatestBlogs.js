import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow next-arrow"
    style={{
      position: 'absolute',
      top: '50%',
      right: '-20px',
      transform: 'translateY(-50%)',
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <button
      className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}
    >
      &gt;
    </button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev-arrow"
    style={{
      position: 'absolute',
      top: '50%',
      left: '-20px',
      transform: 'translateY(-50%)',
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <button
      className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}
    >
      &lt;
    </button>
  </div>
);

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/blogs') // Adjust to your actual backend if needed
      .then((res) => {
        console.log('Blogs fetched:', res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1281, settings: { slidesToShow: 2 } },
      { breakpoint: 602, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <style>{`
        .article-card-container .custom-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .article-card-container:hover .custom-arrow {
          opacity: 1;
        }
        .article-card-container {
          overflow: hidden;
          position: relative;
        }
        .slick-slide > div {
          padding: 0 10px;
          box-sizing: border-box;
        }
      `}</style>

      <div className="latest-blog-section mt-100 home-section">
        <div className="latest-blog-inner">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-heading primary-color">Latest Blogs</h2>
            </div>

            <div className="article-card-container">
              <Slider {...settings}>
                {blogs.map((item, idx) => (
                  <div key={idx}>
                    <div className="article-card bg-transparent p-0 shadow-none">
                      <Link
                        to={`/blog/${item._id}`}
                        className="article-card-img-wrapper d-block position-relative"
                      >
                        <img src={item.image} className="product-icn" alt="" />

                      </Link>

                      <p className="article-card-published text_12 d-flex align-items-center mt-2">
                        <span className="article-date d-flex align-items-center">
                          📅 <span className="ms-2">{new Date(item.date).toLocaleDateString()}</span>
                        </span>
                        <span className="article-author d-flex align-items-center ms-4">
                          👤 <span className="ms-2">{item.author}</span>
                        </span>
                      </p>

                      <h2 className="article-card-heading heading_18 mt-1">
                        <Link
                          to={`/blog/${item._id}`}
                          className="heading_18"
                          style={{ textDecoration: 'none' }}
                        >
                          {item.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
