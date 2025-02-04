// VanJS Feather - XCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const XCircle = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15",
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15",
    }),
  );
};
