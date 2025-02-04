// VanJS Feather - Instagram
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Instagram = (props?: IconProps) => {
  const { path, line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5",
    }),
    path({
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    }),
    line({
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5",
    }),
  );
};
