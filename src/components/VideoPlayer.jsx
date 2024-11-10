import React, { useRef, useState } from 'react';

export const VideoPlayer = ({ 
  src, 
  poster,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  className = "",
  onPlay = () => {},
  onPause = () => {},
  onEnded = () => {}
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full ${className}`}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
        playsInline
        onLoadedData={() => setIsLoading(false)}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      >
        <source src={src} type={`video/${src.split('.').pop()}`} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};