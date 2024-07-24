import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            alert('Time is up!');
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(1500);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="border border-white bg-black rounded-lg shadow-lg p-6 text-white max-w-4xl mx-auto relative overflow-hidden">
      <div className="bg-black rounded-lg shadow-lg p-6 text-white max-w-xl mx-auto">
        <div className="flex items-center justify-evenly relative left-2">
          <h3 className="text-2xl font-medium bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">Pomodoro Timer</h3>
          <div className="bg-gray-900 rounded-full p-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <circle cx="12" cy="13" r="8"></circle>
              <path d="M12 9v4l2 2"></path>
              <path d="M5 3L2 6"></path>
              <path d="m22 6-3-3"></path>
              <path d="M6.38 18.7 4 21"></path>
              <path d="M17.64 18.67 20 21"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex justify-center items-center text-3xl font-semibold mb-4 h-32">{formatTime(timeLeft)}</div>
        <div className="flex justify-evenly mt-8 gap-4">
          <button className="border border-black inline-flex items-center justify-center text-lg font-medium h-10 bg-gray-900 text-white rounded-full px-4 py-2 transition duration-200 hover:bg-blue-900 hover:text-white disabled:pointer-events-none disabled:opacity-50" onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button className="border border-black inline-flex items-center justify-center text-lg font-medium h-10 bg-gray-900 text-white rounded-full px-4 py-2 transition duration-200 hover:bg-blue-900 hover:text-white disabled:pointer-events-none disabled:opacity-50" onClick={resetTimer} disabled={!isRunning}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
