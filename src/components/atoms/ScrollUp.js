import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "../../assets/scroll.css";

const ScrollUp = () => {
  // const [scrollTop, setTop] = useState(null);
  // useEffect(
  //   () => {
  //     const stp = document.querySelector('.scroll');
  //     setTop(stp.scrollTop);

  //   }
  // );
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