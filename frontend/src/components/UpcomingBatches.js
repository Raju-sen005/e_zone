// UpcomingBatches.js
import React from 'react';
import { Link } from 'react-router-dom';

const batches = [
  {
    title: 'AI & Machine Learning',
    date: 'Starts: June 1, 2025'
  },
  {
    title: 'Web Development Bootcamp',
    date: 'Starts: June 15, 2025'
  },
  {
    title: 'Data Science Masterclass',
    date: 'Starts: July 1, 2025'
  }
];

const UpcomingBatches = () => {
  return (
    <section className="pt-5" >
      <div className="batches-section container">
        <h2 className="section-heading primary-color text-center">Upcoming Batches</h2>
        <div className="row mt-5">
          {batches.map((batch, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="batch-card shadow-sm">
                <h4 className="batch-title">{batch.title}</h4>
                <p className="batch-date">
                  <span className="icon-wrapper">
                    <i className="bi bi-calendar-check me-2"></i>
                  </span>
                  {batch.date}
                </p>
                <button className="join-btn">
                  <span className="icon-wrapper">
                    <i className="bi bi-person-plus-fill me-2"></i>
                  </span>
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
