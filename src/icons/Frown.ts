// VanJS Feather - Frown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Frown = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    path({
      d: "M16 16s-1.5-2-4-2-4 2-4 2",
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
};
