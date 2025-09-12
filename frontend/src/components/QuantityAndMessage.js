import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty } from '../store/slices/commonSlice';

const QuantityAndMessage = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.common);

  const decreaseQuantity = () => {
    dispatch(decreaseQty());
  };

  const increaseQuantity = () => {
    dispatch(increaseQty());
  };

  return (
    <div className="misc d-flex align-items-end justify-content-between mt-4">
      {/* Quantity Selector */}
      <div className="quantity d-flex align-items-center justify-content-between">
        <button className="qty-btn dec-qty" onClick={decreaseQuantity}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/icon/minus.svg`} alt="minus" />
        </button>
        <input
          className="qty-input"
          type="number"
          name="qty"
          value={quantity}
          min="0"
          readOnly
        />
        <button className="qty-btn inc-qty" onClick={increaseQuantity}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/icon/plus.svg`} alt="plus" />
        </button>
      </div>

      {/* Message Popup */}
      {/* <div className="message-popup d-flex align-items-center" role="button">
        <span className="message-popup-icon">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 4.25V16.25H4.5V20.0703L5.71875 19.0859L9.25781 16.25H16.5V4.25H1.5ZM3 5.75H15V14.75H8.74219L8.53125 14.9141L6 16.9297V14.75H3V5.75ZM18 7.25V8.75H21V17.75H18V19.9297L15.2578 17.75H9.63281L7.75781 19.25H14.7422L19.5 23.0703V19.25H22.5V7.25H18Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="message-popup-text ms-2">Message</span>
      </div> */}
    </div>
  );
};

export default QuantityAndMessage;
