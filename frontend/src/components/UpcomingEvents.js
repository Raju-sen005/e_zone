import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" style={arrowStyle('right')} onClick={onClick}>
    <button style={arrowButtonStyle}>&gt;</button>
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" style={arrowStyle('left')} onClick={onClick}>
    <button style={arrowButtonStyle}>&lt;</button>
  </div>
);

// Arrow styles
const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '-20px',
  transform: 'translateY(-50%)',
  zIndex: 1,
});
const arrowButtonStyle = {
  backgroundColor: '#00234D',
  color: '#fff',
  padding: '10px 15px',
  borderRadius: '5%',
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/events'); // Update URL if needed
      console.log('Fetched events:', res.data);
      setEvents(res.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

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
        .event-slider-container .custom-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .event-slider-container:hover .custom-arrow {
          opacity: 1;
        }
        .event-slider-container {
          overflow: hidden;
          position: relative;
        }
        .slick-slide > div {
          padding: 0 10px;
          box-sizing: border-box;
        }
        .wide-container {
          max-width: calc(90% - 40px);
          margin: auto;
        }
          .article-slick-item {
  padding: 0 10px;
  box-sizing: border-box;
}

.event-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-icn {
  height: 200px;
  object-fit: cover;
}

.event-title {
  font-size: 1.2rem;
  font-weight: bold;
}

     ` }</style>

      <div className="latest-blog-section mt-100 overflow-hidden home-section pt-5" style={{ height: 'auto' }}>
        <div className="latest-blog-inner">
          <div className="wide-container">
            <div className="section-header text-center mb-4">
              <h2 className="section-heading primary-color">Upcoming Events</h2>
            </div>

            <div className="event-slider-container position-relative w-full">
              {events.length === 0 ? (
                <p className="text-center">No upcoming events available.</p>
              ) : (
                <Slider {...settings} className="d-block w-full" style={{ width: '101%' }}>
                  {events.map((e, i) => (
                    <div key={e._id || i} className="article-slick-item mb-4">
                      <div className="event-card shadow-sm border rounded h-100 overflow-hidden">
                        <img src={e.image} className="product-icn w-100" alt={e.title} />
                        <div className="event-content p-3">
                          <h3 className="event-title">{e.title}</h3>
                          <p className="event-date pt-2 mb-1">
                            <i className="bi bi-calendar-event me-2"></i>
                            {new Date(e.date).toLocaleDateString('en-IN')}
                          </p>
                          <p className="event-location mb-3">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            {e.location}
                          </p>
                          <a
                            href={e.registerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-3"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default UpcomingEvents; 