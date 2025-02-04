// VanJS Feather - Divide
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Divide = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "6",
      r: "2",
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
    circle({
      cx: "12",
      cy: "18",
      r: "2",
    }),
  );
};
