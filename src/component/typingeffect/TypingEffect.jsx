import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
