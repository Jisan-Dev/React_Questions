import { useState } from "react";
import FillerButtons from "./FillerButtons";
import Jug from "./Jug";

const FillTheJug = () => {
  const [fillingPercentage, setFillingPercentage] = useState(0);

  const fillTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev === 0) return 1;

      const change = prev + prev * 0.6;
      return change > 100 ? 100 : change;
    });
  };

  const emptyTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev < 1) prev = 0;
      return prev - prev * 0.2;
    });
  };

  return (
    <div>
      <Jug fillingPercentage={fillingPercentage} />
      <FillerButtons fillTheJug={fillTheJug} emptyTheJug={emptyTheJug} />
    </div>
  );
};

export default FillTheJug;
