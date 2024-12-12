import React, { useState } from 'react';


const Prof = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    profession: '',
    willingToHelp: '',
    profilePic: null,
    aboutYourself: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Profession:</label>
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Are you willing to help people without a fee?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="willingToHelp"
              value="yes"
              checked={formData.willingToHelp === 'yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="willingToHelp"
              value="no"
              checked={formData.willingToHelp === 'no'}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Upload Profile Picture:</label>
        <input
          type="file"
          name="profilePic"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Talk About Yourself:</label>
        <textarea
          name="aboutYourself"
          value={formData.aboutYourself}
          onChange={handleChange}
          required
        />
      </div>

      <button className="submit-button" type="submit">Create Account</button>
    </form>
  );
};

export default Prof;
