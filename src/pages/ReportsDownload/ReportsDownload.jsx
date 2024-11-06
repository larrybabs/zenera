import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Reports = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           isValidEmail(formData.email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send form data to your backend API
    //   const response = await fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       email: formData.email,
    //       // Add any additional data you want to send
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Form submission failed');
    //   }

      // Trigger PDF download
      const pdfUrl = '/pdf/ZeneraMap.pdf'; 
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'report.pdf'; // Replace with desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({ name: '', email: '' });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="mt-24 w-full md:w-1/2 h-full shadow-xl mx-auto p-6 md:p-14">
        <h2 className="font-bold text-2xl md:text-3xl text-center">
          Please fill and submit the form below to start downloading
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Name"
              required
            />
            {formData.name === '' && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email"
              required
            />
            {formData.email !== '' && !isValidEmail(formData.email) && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid() || isLoading}
            className={`w-full p-2 text-white transition-all duration-200
              ${isFormValid() && !isLoading 
                ? 'bg-primary hover:bg-primary/90' 
                : 'bg-gray cursor-not-allowed'
              }`}
          >
            {isLoading ? 'Processing...' : 'SUBMIT AND DOWNLOAD'}
          </button>

          <p className="text-center text-sm text-gray-600">
            By submitting this form you agree to the terms of Zenera
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};