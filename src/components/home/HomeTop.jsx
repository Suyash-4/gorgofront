import React from "react";
import BoxBetweenFont from "./BoxBetweenFont";

const HomeTop = () => {
  return (
    <>
      <div className=" text-7xl text-white font-[Quintessa300] flex flex-col items-center pt-3 ">
        <div className="text-[9.4vw] leading-[17.9vh] uppercase">
          L'étincelle
        </div>
        <div className="text-[9.4vw] leading-[17.9vh] uppercase flex gap-1.5">
          qui
          <div className="relative">
            <div className="overlay h-full w-full bg-transparent z-10 absolute"></div>
            <BoxBetweenFont />
          </div>
          génère
        </div>

        <div className="text-[9.4vw] leading-[17.9vh] uppercase">
          la créativité
        </div>
      </div>
    </>
  );
};

export default HomeTop;
