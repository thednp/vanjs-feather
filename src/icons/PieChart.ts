// VanJS Feather - PieChart
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const PieChart = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21.21 15.89A10 10 0 1 1 8 2.83",
    }),
    path({
      d: "M22 12A10 10 0 0 0 12 2v10z",
    }),
  );
};
