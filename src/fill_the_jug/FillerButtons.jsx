const FillerButtons = ({ fillTheJug, emptyTheJug }) => {
  return (
    <div className="flex items-center justify-center my-1">
      <button className="w-[50px] h-[50px] rounded-full bg-green-700 mx-1 cursor-pointer" onClick={fillTheJug}>
        <span className="text-white">&#8593;</span>
      </button>
      <button className="w-[50px] h-[50px] rounded-full bg-red-700 mx-1 cursor-pointer" onClick={emptyTheJug}>
        <span className="text-white">&#8595;</span>
      </button>
    </div>
  );
};

export default FillerButtons;
