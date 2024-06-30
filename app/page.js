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
    <div className="bg-transparent flex flex-col justify-center items-center h-screen text-white text-6xl">
      <h2 className="stroke-text">{currentTime}</h2>
    </div>
  );
}
