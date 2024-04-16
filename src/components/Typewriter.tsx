import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
  delayEnd: number;
}

const Typewriter = ({ text, delay, delayEnd }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
      if (currentIndex == text.length) {
        await setTimeout(() => {
          setCurrentIndex(0);
          setCurrentText("");
        }, delayEnd);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, delayEnd]);

  return <span>{currentText}</span>;
};

export default Typewriter;
