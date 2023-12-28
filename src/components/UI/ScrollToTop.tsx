"use client";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { useEffect } from "react";
import AnimationWrapper from "./AnimationWrapper";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // show the button when the scroll position is more than 300 pixels
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <AnimationWrapper
      show={showButton}
      className="block fixed bottom-4 right-4 z-10"
      from={{ transform: "scale(0)" }}
      to={{ transform: "scale(1)" }}
      options={{ duration: 200 }}
    >
      <div
        className=" flex justify-center items-center rounded-[50%] w-[50px] h-[50px] bg-primary/40 text-white cursor-pointer z-10"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </AnimationWrapper>
  );
};

export default ScrollToTop;
