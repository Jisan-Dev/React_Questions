import { useState } from "react";
import FillerButtons from "./FillerButtons";
import Jug from "./Jug";

const FillTheJug = () => {
  const [fillingPercentage, setFillingPercentage] = useState(0);

  const fillTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev === 0) return 1;

      const change = prev + prev * 0.4;
      return change > 100 ? 100 : change;
    });
  };

  return (
    <div>
      <Jug fillingPercentage={fillingPercentage} />
      <FillerButtons fillTheJug={fillTheJug} />
    </div>
  );
};

export default FillTheJug;
