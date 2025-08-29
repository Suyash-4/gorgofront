import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      {/* <div className="text-6xl text-white "> */}
        {/* Something like <ul><li> pair
        <div className="flex flex-row gap-10 display-none">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/agence">
            Agence
          </Link>
          <Link className="" to="/projects">
            Projects
          </Link>
        </div>
        {/* Direct Links to pages */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      {/* </div> */}
      <Home />
    </>
  );
};

export default App;
