import React from 'react';

const MinimalLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Outer ring */}
        {/* <div className="absolute inset-0 border-2 border-gray-200 rounded-full" /> */}
        {/* Animated arc */}
        <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default MinimalLoader;