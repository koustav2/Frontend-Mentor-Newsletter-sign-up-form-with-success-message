import React from 'react';
import './success.css';

const Success = function ({ input1, success, dismiss }) {
  return (
    <div className="container1">
      <div className="modal">
        <img src="images/icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p className="text">
          A confirmation email has been sent to <b>{input1}</b>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button onClick={dismiss}>Dismiss message</button>
      </div>
    </div>
  );
};

export default Success;
