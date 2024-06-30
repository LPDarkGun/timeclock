'use client'


import React, { useState, useEffect } from 'react';

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen text-white text-5xl">
      <h2>{currentTime}</h2>
    </div>
  );
}
