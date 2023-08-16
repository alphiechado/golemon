import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import ErrorBoundary from './components/ErrorBoundary';
import { SigninContext } from './context/SigninContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigation">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from Heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h1>TheForm</h1>
          <div
            className={`navLinks ${isNavExpanded ? 'show-menu' : 'hide-menu'}`}
          >
            {/* <Link to="/">Home</Link> */}
            <div className="NavButtons">
              <Link to="/SignIn">
                <button className="NavButton1">Join the Waitlist</button>
              </Link>
            </div>
          </div>
        </nav>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
              path="/SignIn"
              element={
                <SigninContext.Provider
                  value={{ username, firstName, lastName, email, phoneNumbers, password, confirmPassword, setUsername, setShowProfile, setFirstName, setLastName, setEmail, setPhoneNumbers, setPassword, setConfirmPassword }}
                >
                  {showProfile ? <Profile /> : <SignIn />}
                </SigninContext.Provider>
              }
            />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
