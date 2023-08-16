import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SigninContext } from '../context/SigninContext';

function SignIn() {
  const { setUsername, setShowProfile, setFirstName,       
  setLastName,
  setEmail,
  setPhoneNumbers,
  setPassword,
  setConfirmPassword, } = useContext(SigninContext);
  return (
    <>
      <div className="SignIn">
        <h1 className="Signinheader">Join the waitlist</h1>
        <div className="SignIn1">
          <p className="Signinpara"></p>
          <div className="inputParent">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="First Name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="input"
              type="number"
              placeholder="Phone Number"
              onChange={(event) => {
                setPhoneNumbers(event.target.value);
              }}
            />
            <input
              className="input"
              type="Password"
              placeholder="Password" 
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <button
            className="Signinbutton"
            onClick={() => {
              setShowProfile(true);
            }}
          >
            Sign in
          </button>
          <p className="Signinpara1">
            Dont have an account?{' '}
            <Link className="Signinlink" to="/CreateAccount">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
