import React, { useContext } from 'react';
import { SigninContext } from '../context/SigninContext';
import Asset from '../assets/Asset.png'


function Profile() {
  const { username, firstName, lastName, email, phoneNumbers, password, confirmPassword } = useContext(SigninContext);
  return (
    <>
      <div className="Profile">
        <div>
          <h1 className="Profileheader">Welcome</h1>
          <h2 className="Profileheader2">{username}</h2>
          <p className="Profilepara">These are your details</p>
          <p className="Profilepara">{firstName}</p>
          <p className="Profilepara">{lastName}</p>
          <p className="Profilepara">{email}</p>
          <p className="Profilepara">{phoneNumbers}</p>
          <p className="Profilepara">{password}</p>
          <p className="Profilepara">{confirmPassword}</p>
        

        </div>
        <div>
          <img className="Profileimage"  src={Asset} alt="Homeimage" />
        </div>
      </div>
    </>
  );
}

export default Profile;
