import React from 'react';

//import { useHistory } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Choose Type of Account</h2>
        <p className="note">Note: Professional accounts are for medical personnel</p>
        <form>
          <div className="input-group">
            <input type="radio" id="professional" name="accountType" value="professional" required />
            <label htmlFor="professional">Professional Account</label>
          </div>
          <div className="input-group">
            <input type="radio" id="normal" name="accountType" value="normal" required />
            <label htmlFor="normal">Normal Account</label>
          </div>
          <button type="submit" className="signup-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
