import * as React from "react";
import { useState, useEffect } from 'react';

interface typewriteProps {
  text: string,
  speed: number,
}

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const Typewriter = (text, speed) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText} nada</p>;
};

export default Typewriter;