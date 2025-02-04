// VanJS Feather - Sidebar
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Sidebar = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21",
    }),
  );
};
