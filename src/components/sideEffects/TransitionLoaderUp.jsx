import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const TransitionLoaderUp = ({ children }) => {
  const currentLocation = useLocation().pathname;
  const loaderBars = useRef(null);

  useGSAP(() => {
    gsap.killTweensOf("*");

    const tl = gsap.timeline();

    // Reset loader state before each run
    gsap.set(loaderBars.current, { autoAlpha: 1 });
    gsap.set(".stair", { y: 0, height: "100%" });

    // Animate stairs in
    tl.from(".stair", {
      height: "100%",
      duration: 0.5,
      stagger: -0.1,
      ease: "power2.out",
    });

    // Drop stairs down
    tl.to(".stair", {
      y: "100%",
      duration: 0.6,
      stagger: -0.1,
      ease: "power4.inOut",
    });

    // Fade out loader container smoothly
    tl.to(loaderBars.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentLocation]);

  return (
    <>
      {/* Loader overlay */}
      <div
        ref={loaderBars}
        className="h-screen w-full fixed top-0 left-0 z-50 bg-transparent pointer-events-none"
      >
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* App content (no transform applied here) */}
      <div>{children}</div>
    </>
  );
};

export default TransitionLoaderUp;
