import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <>
      <div className="text-white flex gap-40 leading-[5.5vw] justify-center font-[Quintessa500] ">
        <div className="border-5 border-white rounded-full w-fit px-5 pt-2.5 hover:border-lime-400 hover:text-lime-400 transition-all duration-200 ease-in-out">
          <Link to="/projects" className="uppercase ">
            Projects
          </Link>
        </div>
        <div className="border-5 border-white rounded-full w-fit px-5 pt-2.5 hover:border-lime-400 hover:text-lime-400 transition-all duration-200 ease-in-out">
          <Link to="/agence" className="uppercase ">
            Agence
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeBottom;
