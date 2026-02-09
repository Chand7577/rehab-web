import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={`relative inline-block min-w-0 ${className}`}>
      {/* Invisible full text reserves space so layout below doesn't shift */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      {/* Typewriter output overlaid in same space */}
      <span className="absolute left-0 top-0">
        {displayText}
        {!isComplete && (
          <span className="inline-block w-0.5 h-4 ml-0.5 align-middle bg-emerald-600 animate-pulse" />
        )}
      </span>
    </span>
  );
};

export default Typewriter;
