// VanJS Feather - Underline
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Underline = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3",
    }),
    line({
      x1: "4",
      y1: "21",
      x2: "20",
      y2: "21",
    }),
  );
};
