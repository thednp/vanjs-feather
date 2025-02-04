// VanJS Feather - PauseCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const PauseCircle = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "10",
      y1: "15",
      x2: "10",
      y2: "9",
    }),
    line({
      x1: "14",
      y1: "15",
      x2: "14",
      y2: "9",
    }),
  );
};
