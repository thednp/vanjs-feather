// VanJS Feather - Tablet
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Tablet = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
  );
};
