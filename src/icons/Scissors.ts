// VanJS Feather - Scissors
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Scissors = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "6",
      cy: "6",
      r: "3",
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3",
    }),
    line({
      x1: "20",
      y1: "4",
      x2: "8.12",
      y2: "15.88",
    }),
    line({
      x1: "14.47",
      y1: "14.48",
      x2: "20",
      y2: "20",
    }),
    line({
      x1: "8.12",
      y1: "8.12",
      x2: "12",
      y2: "12",
    }),
  );
};
