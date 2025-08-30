/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null); //actual images refernece
  const imgArr = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  // Important for initializing ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: true,
        start: "top 21.8%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const imgIndex = Math.floor(elem.progress * (imgArr.length - 1) );
          imgRef.current.src = imgArr[imgIndex];
        },
      },
    });
  });
  return (
    <>
      <div className="section-1 h-screen">
        <div
          ref={imgDivRef}
          className="h-[20vw] w-[15vw] rounded-4xl overflow-hidden absolute top-50 left-[30vw]"
        >
          <img
            ref={imgRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="&nbsp;"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative font-[Quintessa500]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] leading-[16.5vw] uppercase text-center ">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className=" text-[3.5rem] leading-13">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </>
  );
};

export default Agence;
