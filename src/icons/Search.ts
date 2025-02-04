// VanJS Feather - Search
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Search = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8",
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65",
    }),
  );
};
