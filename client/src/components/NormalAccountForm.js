import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NormalAccountForm = () => {
  const [formData, setFormData] = useState({ identityChoice: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Identity choice:', formData.identityChoice);

    // Navigating to a new route if a certain option is chosen
    if (formData.identityChoice === 'hide') {
      navigate('/AnonymousHelpForm'); 
    }
    if (formData.identityChoice === 'dontHide') {
        navigate('/FullDetailsForm'); 
      }
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Express Yourself
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          In order to clearly express yourself, you can choose to be anonymous or decide to use your full details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="anonymous" className="flex items-center">
              <input
                type="radio"
                id="anonymous"
                name="identityChoice"
                value="hide"
                onChange={(e) => setFormData({ ...formData, identityChoice: e.target.value })}
                required
                className="mr-2 text-primary focus:ring-primary focus:ring-offset-0 focus:ring-2"
              />
              <span className="text-gray-700">Hide Identity</span>
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="full-details" className="flex items-center">
              <input
                type="radio"
                id="full-details"
                name="identityChoice"
                value="dontHide"
                onChange={(e) => setFormData({ ...formData, identityChoice: e.target.value })}
                required
                className="mr-2 text-primary focus:ring-primary focus:ring-offset-0 focus:ring-2"
              />
              <span className="text-gray-700">Don't Hide Identity</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default NormalAccountForm;
