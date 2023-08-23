import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import Success from './components/Success';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = React.useState(false);
  const [input1, setInput1] = React.useState('');
  const [inputError, setInputError] = React.useState(false);

  const onSubmit = (data) => {
    if (data.Email === '') {
      setInputError(true);
    } else {
      setInput1(data.Email);
      setSuccess(true);
      setInputError(false); // Clear the input error state
    }
  };

  const dismiss = () => {
    setSuccess(false);
    setInput1(''); // Reset the input value
    setInputError(false); // Clear the input error state
  };

  return (
    <>
      {success ? (
        <Success input1={input1} success={success} dismiss={dismiss} />
      ) : (
        <div className="container">
          <div className="column">
            <div>
              <div className="top">
                <h1>Stay updated!</h1>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
              </div>
              <ul>
                <li>
                  <img src="/images/icon-list.svg" alt="" />
                  <span>Product discovery and building what matters</span>
                </li>
                <li>
                  <img src="/images/icon-list.svg" alt="" />
                  <span>Measuring to ensure updates are a success</span>
                </li>
                <li>
                  <img src="/images/icon-list.svg" alt="" />
                  <span>And much more!</span>
                </li>
              </ul>
              <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="error">
                  <h4>email address</h4>
                  {errors.Email && (
                    <h5 className="error-message">valid Email required</h5>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className={input1 === '' || errors.Email ? 'no-email' : ''}
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
          <div className="column">
            {/* Image in the second column */}
            <img
              src="/images/illustration-sign-up-desktop.svg"
              alt="Your Image"
            />
          </div>
        </div>
      )}
    </>
  );
}
