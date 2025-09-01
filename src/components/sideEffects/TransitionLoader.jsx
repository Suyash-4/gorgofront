/* eslint-disable no-unused-vars */
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";
// import { useLocation } from "react-router-dom";

// const TransitionLoader = (acceptingAppAsAChildComponent) => {
//   const currentLocation = useLocation().pathname;
//   const loaderBars = useRef(null);
//   const refOfPage = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.to(loaderBars.current, {
//       display: "block",
//       backgroundColor: "red",
//     });
//     tl.from(".stair", {
//       height: 0,
//       duration: 0.5,
//       stagger: -0.1,
//     });
//     tl.to(".stair", {
//       y: "100%",
//       backgroundColor: "green",
//       duration: 0.5,
//       stagger: -0.1,
//     });
//     // After loader bars have played out
//     tl.to(loaderBars.current, {
//       display: "none",
//       //   zindex: "-1",
//     });
//     tl.to(".stair", {
//       y: "0%",
//     });
//     gsap.from(refOfPage.current, {
//       opacity: 0,
//       delay: 1.3,
//       scale: 1.2,
//     });
//   }, [currentLocation]);

//   return (
//     <>
//       <div>
//         <div ref={loaderBars} className="h-screen w-full fixed top-0 z-20">
//           <div className="h-screen w-full flex">
//             <div className="stair h-full w-1/5 bg-black "></div>
//             <div className="stair h-full w-1/5 bg-black "></div>
//             <div className="stair h-full w-1/5 bg-black "></div>
//             <div className="stair h-full w-1/5 bg-black "></div>
//             <div className="stair h-full w-1/5 bg-black "></div>
//           </div>
//         </div>
//       </div>
//       <div ref={refOfPage}>{acceptingAppAsAChildComponent.children}</div>
//     </>
//   );
// };

// export default TransitionLoader;

// Saarthack Code
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { useRef } from 'react'
// import { useLocation } from 'react-router-dom'

// const TransitionLoader = (props) => {

//     const currentPath = useLocation().pathname

//     const stairParentRef = useRef(null)
//     const pageRef = useRef(null)

//     useGSAP(function () {
//         const tl = gsap.timeline()
//         tl.to(stairParentRef.current, {
//             display: 'block',
//             backgroundColor:"black",
//         })
//         tl.from('.stair', {
//             height: 0,

//             stagger: {
//                 amount: -0.2
//             }
//         })
//         tl.to('.stair', {
//             y: '100%',
//             backgroundColor:"transparent",
//             stagger: {
//                 amount: -0.25
//             }
//         })
//         tl.to(stairParentRef.current, {
//             display: 'none'
//         })
//         tl.to('.stair', {
//             y: '0%',
//         })

//         gsap.from(pageRef.current,{
//             opacity:0,
//             delay:1.3,
//             scale:1.2
//         })
//     }, [currentPath])

//     return (
//         <div>
//             <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
//                 <div className='h-full w-full flex'>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                     <div className='stair h-full w-1/5 bg-black'></div>
//                 </div>
//             </div>
//             <div ref={pageRef}>
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// export default TransitionLoader


// Chat GPT Code
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const TransitionLoader = ({ children }) => {
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

export default TransitionLoader;

