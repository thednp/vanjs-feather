// VanJS Feather - Globe
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Globe = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    path({
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    }),
  );
};
