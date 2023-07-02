import React from "react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Ellipse from "../components/Ellipse";

const Candidates = () => {
  return (
    <div className="bg-black h-full w-full">
      <Navbar />
      <div className="grid grid-cols-2">
        <Ellipse />
        <Search />
      </div>
    </div>
  );
};

export default Candidates;
