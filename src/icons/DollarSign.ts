// VanJS Feather - DollarSign
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const DollarSign = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "23",
    }),
    path({
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    }),
  );
};
