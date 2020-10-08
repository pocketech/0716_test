import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "../../assets/scroll.css";

const ScrollUp = () => {
  return (
    <div className="scroll scroll-up">
      <a href="#wrap">
        <i
          onClick={() => scroll.scrollToTop()}
          className="fa fa-arrow-up"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default ScrollUp;