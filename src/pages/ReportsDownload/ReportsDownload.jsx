import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReportsBg from "../../assets/img/zenHero2.png";

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

    if (!isFormValid()) {
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        fields: [
          {
            name: "firstname",
            value: formData.name
          },
          {
            name: "email",
            value: formData.email
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        },
        skipValidation: true
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/48051081/536477f0-de22-4f0a-8028-0d58ab417fd3`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Form submission failed');
      }

      // Trigger PDF download
      const pdfUrl = '/pdf/ZENERA SOCIAL INVESTMENT REPORT LANDSCAPE NEW 02.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'ZENERA SOCIAL INVESTMENT REPORT LANDSCAPE NEW 02.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({ name: '', email: '' });

    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="mt-24 w-full md:w-2/3 h-full shadow-xl mx-auto p-6 md:p-14">
        <h2 className="font-bold text-2xl md:text-4xl mb-12">
        IMPACTZ REPORT
        </h2>

        <img src={ReportsBg} alt="reports download" />

        <p className="mt-4 mb-4 md:mb-10">
          {" "}
          Discover how we are
          driving meaningful change through impactful initiatives that empower
          communities, promote well-being, and foster sustainable development.
          Download our latest Social Investment Report to explore our commitment
          to creating a better future for all.{" "}
        </p>
{/* 
        <a 
         href="/pdf/ZENERA SOCIAL INVESTMENT REPORT LANDSCAPE NEW 02.pdf" download="ZENERA SOCIAL INVESTMENT REPORT LANDSCAPE NEW 02.pdf"
        //  target="_blank"
        //  rel="noopener noreferrer"
         className="px-16 p-2 text-white transition-all duration-200 bg-primary hover:bg-primary/90"
        >
          DOWNLOAD NOW
        </a> */}
        <h2 className="font-bold text-xl ">
          Please fill and submit the form below to start downloading
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="md:w-1/2 border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="md:w-1/2 border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
            className={`md:w-1/2 p-2 text-white transition-all duration-200
              ${isFormValid() && !isLoading 
                ? 'bg-primary hover:bg-primary/90' 
                : 'bg-gray cursor-not-allowed'
              }`}
          >
            {isLoading ? 'Processing...' : 'SUBMIT AND DOWNLOAD'}
          </button>

          <p className=" text-sm text-gray-600">
            By submitting this form you agree to the terms of Zenera
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
