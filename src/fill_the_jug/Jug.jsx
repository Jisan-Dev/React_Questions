import React from "react";

const Jug = () => {
  return (
    <div className="w-[200px] h-[400px] border-gray-500 border-2 border-t-0 rounded-sm relative overflow-hidden rounded-b">
      <div className={`w-full bg-blue-600 opacity-70 h-1/2 flex justify-center absolute bottom-0 rounded-b-s rounded-t-s`}>
        <span className="text-white text-xl animate-pulse">{Math.round(3.2)}%</span>
      </div>
    </div>
  );
};

export default Jug;
