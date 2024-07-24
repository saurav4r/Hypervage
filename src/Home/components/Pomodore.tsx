import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-timer flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>
      <div className="time-display text-6xl font-mono mb-8">{formatTime(time)}</div>
      <div className="buttons space-x-4">
        <button 
          onClick={startTimer} 
          disabled={isActive} 
          className={`px-6 py-2 rounded-lg font-semibold ${isActive ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} transition duration-300 ease-in-out`}>
          Start
        </button>
        <button 
          onClick={resetTimer} 
          className="px-6 py-2 rounded-lg font-semibold bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out">
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
