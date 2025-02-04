// VanJS Feather - Flag
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Flag = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
    }),
    line({
      x1: "4",
      y1: "22",
      x2: "4",
      y2: "15",
    }),
  );
};
