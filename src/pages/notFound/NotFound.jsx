import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, ArrowLeft } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Error Code and Message */}
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-gray-900">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Page not found
            </h2>
            <p className="text-gray-500">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative">
            <svg
              className="w-full h-48"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 90 Q100 10 190 90"
                stroke="#E5E7EB"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="100" cy="85" r="8" fill="#3B82F6" />
              <path
                d="M92 75 L100 65 L108 75"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white  hover:bg-opacity-85 transition-colors"
            >
              <HomeIcon size={20} />
              Back to Home
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>
          </div>

          {/* Help Text */}
          {/* <p className="text-sm text-gray-500">
          If you think this is a mistake, please{' '}
          <a
            href="/contact"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            contact support
          </a>
        </p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
