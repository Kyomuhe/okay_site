import React, { useState } from 'react';

const ProfessionalRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    profession: '',
    willingToHelp: '',
    profilePic: null,
    about: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // submission logic will be added here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Professional Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block text-gray-700 font-medium mb-2">
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Are you willing to help people without a fee?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="willingToHelp"
                  value="yes"
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="willingToHelp"
                  value="no"
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700 font-medium mb-2">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={handleFileChange}
              required
              className="w-full text-gray-700"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="about" className="block text-gray-700 font-medium mb-2">
              Talk About Yourself
            </label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalRegistration;
