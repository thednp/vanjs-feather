// VanJS Feather - AlertOctagon
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const AlertOctagon = (props?: IconProps) => {
  const { polygon, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points:
        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12",
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16",
    }),
  );
};
