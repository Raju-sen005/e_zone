import React, { useState } from 'react';

const CustomerReview = () => {
  const [showForm, setShowForm] = useState(false);

  const handleWriteClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="preview" className="tab-pane fade">
      <div className="review-area accordion-parent">
        <h4 className="heading_18 mb-3">Customer Reviews</h4>

        <div className="review-header d-flex justify-content-between align-items-center">
          <p className="text_16">No reviews yet.</p>
          <button
            className="text_14 bg-transparent text-decoration-underline write-btn"
            type="button"
            onClick={handleWriteClick}
          >
            Write a review
          </button>
        </div>

        {/* Conditionally render the review form */}
        {showForm && (
          <div className="review-form-area accordion-child mt-4">
            <form action="#">
              <fieldset>
                <label className="label">Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </fieldset>
              <fieldset>
                <label className="label">Email</label>
                <input type="email" placeholder="john.smith@example.com" />
              </fieldset>
              <fieldset>
                <label className="label">Rating</label>
                <div className="star-rating d-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                        fill="#B2B2B2" />
                    </svg>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <label className="label">Review Title</label>
                <input type="text" placeholder="Give your review a title" />
              </fieldset>
              <fieldset>
                <label className="label">Body of Review (2000)</label>
                <textarea cols="30" rows="10" placeholder="Write your comments here"></textarea>
              </fieldset>

              <button type="submit" className="position-relative review-submit-btn">SUBMIT</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerReview;
