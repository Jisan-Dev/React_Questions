import React from "react";

const FillerButtons = () => {
  const fillTheJug = () => {
    console.log("barbe");
  };
  const emptyTheJug = () => {
    console.log("kombe");
  };
  return (
    <div className="flex items-center justify-center my-1">
      <button className="w-[50px] h-[50px] rounded-full bg-green-700 mx-1" onClick={fillTheJug}>
        <span className="text-white">&#8593;</span>
      </button>
      <button className="w-[50px] h-[50px] rounded-full bg-red-700 mx-1" onClick={emptyTheJug}>
        <span className="text-white">&#8595;</span>
      </button>
    </div>
  );
};

export default FillerButtons;
