import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
        <div className="w-42 h-42 flex flex-col items-center justify-center">
          <p className="text-xl text-gray-600">{formatDate(currentTime)}</p>
          <p className="text-2xl font-mono text-gray-800 mt-2">{formatTime(currentTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
