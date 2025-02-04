// VanJS Feather - Link2
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Link2 = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3",
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
};
