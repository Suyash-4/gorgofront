/*eslint-disable */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Menu = () => {
  const elemParentRef = useRef(null);
  const marqueeRef = useRef(null);
  useGSAP(() => {
    // target all child divs inside elemParentRef
    const items = elemParentRef.current.querySelectorAll(".menu-item");

    gsap.from(items, {
      rotateX: -90, // start as if folded backward
      transformOrigin: "top center", // hinge effect
      opacity: 0, // fade in while flipping
      y: -50, // slight upward offset
      duration: 0.8, // how long each item animates
      ease: "back.out(1.7)", // springy, smooth effect
      stagger: 0.2, // delay between each child
      delay: 1, // wait before starting
    });
  });

  const handleMouseEnter = () => {
    gsap.to(marqueeRef.current, {
      y: "0%",
      opacity:1,
      duration: 1.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(marqueeRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="text-white h-screen w-screen bg-gray-900 fixed top-0 left-0 z-30">
      <div
        ref={elemParentRef}
        className="flex flex-col items-center  justify-center h-full text-[8vw] font-[Quintessa500] leading-[6vw] "
      >
        <div
          
          className="w-full "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="menu-item relative border-t-1 border-b-1 border-gray-500 w-full text-center pt-7 ">
            PROJETS
            <div ref={marqueeRef} className="marquee absolute top-0  w-full h-full bg-[#d2fd50] text-black overflow-hidden">
              <div className="moveX flex gap-10 uppercase items-center leading-[7vw]">
                {/* Set 1 */}
                <h2>Pour tout voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="projets-img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Pour tout voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="projets-img-2"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />

                {/* Set 2 */}
                <h2>Pour tout voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="projets-img-3"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Pour tout voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt="projets-img-4"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="menu-item relative border-t border-b border-gray-500 w-full text-center pt-7">
            AGENCE
            <div ref={marqueeRef} className="marquee absolute top-0 left-0 w-full h-full bg-[#d2fd50] text-black overflow-hidden">
              <div className="moveX flex gap-10 uppercase items-center leading-[7vw]">
                {/* Set 1 */}
                <h2>Pour tout savoir</h2>
                <img
                  src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg"
                  alt="agence-img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Pour tout savoir&nbsp;</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="agence-img-2"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />

                {/* Set 2 */}
                <h2>Pour tout savoir</h2>
                <img
                  src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg"
                  alt="agence-img-3"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Pour tout savoir&nbsp;</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt="agence-img-4"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="menu-item relative border-t border-b border-gray-500 w-full text-center pt-7">
            CONTACT
            <div ref={marqueeRef} className="marquee absolute top-0 left-0 w-full h-full bg-[#d2fd50] text-black overflow-hidden">
              <div className="moveX flex gap-10 uppercase items-center leading-[7vw]">
                {/* Set 1 */}
                <h2>Écrivez-nous</h2>
                <img
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt="contact-img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Écrivez-nous</h2>
                <img
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt="contact-img-2"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />

                {/* Set 2 */}
                <h2>Écrivez-nous</h2>
                <img
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt="contact-img-3"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Écrivez-nous</h2>
                <img
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt="contact-img-4"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="menu-item relative border-t border-b border-gray-500 w-full text-center pt-7">
            BLOGUE
            <div ref={marqueeRef} className="marquee absolute top-0 left-0 w-full h-full bg-[#d2fd50] text-black overflow-hidden">
              <div className="moveX flex gap-10 uppercase items-center leading-[7vw]">
                {/* Set 1 */}
                <h2>Lire plus</h2>
                <img
                  src="https://images.unsplash.com/photo-1700405084579-d093cb3adb80?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Lire plus</h2>
                <img
                  src="https://images.unsplash.com/photo-1724097407273-67c9d4d4f590?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />

                {/* Set 2 */}
                <h2>Lire les articles</h2>
                <img
                  src="https://images.unsplash.com/photo-1700405084579-d093cb3adb80?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
                <h2>Lire les articles &nbsp;</h2>
                <img
                  src="https://images.unsplash.com/photo-1724097407273-67c9d4d4f590?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="h-29 w-70 shrink-0 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;




