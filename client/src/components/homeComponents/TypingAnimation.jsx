import React, { useState, useEffect } from 'react';

function TypingAnimation() {
  const text = "Welcome to CampusConnect";
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
      } else {
        setIsTyping(false);
        setCurrentIndex(text.length - 1);
      }
    } else {
      if (currentIndex >= 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, 100);
      } else {
        setIsTyping(true);
        setDisplayText('');
        setCurrentIndex(0);
      }
    }

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text]);

  return (
    <span  className="inline-block text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide select-none">
      {displayText}
      <span className="border-r-2 border-white animate-pulse ml-1" />
    </span>
  );
}

export default TypingAnimation;