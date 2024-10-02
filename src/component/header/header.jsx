import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/lesternew.png";
import SOCIAL from "./headerSocial";
import TypingEffect from "../typingeffect/TypingEffect";
import ReactTextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Freelance Web Developer",
  "Wordpress Developer",
  "Shopify Developer",
  "Creative Thinker",
];

const Header = () => {
  const [index, setIndex] = useState(0); // Initialize state for index

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length); // Cycle through TEXTS
    }, 5000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <TypingEffect text="Leester B. Erasga" speed={200} />
        </h1>
        <h5 className="text-light">
          <ReactTextTransition springConfig={presets.wobbly}>
            {TEXTS[index]}
          </ReactTextTransition>
        </h5>
        <CTA />
        <SOCIAL />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
