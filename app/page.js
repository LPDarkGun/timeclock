'use client'

import React, { useState, useEffect } from 'react';

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-transparent flex flex-col justify-center items-center h-screen text-white text-6xl">
      <h2 className="stroke-text">{currentTime}</h2>
    </div>
  );
}
