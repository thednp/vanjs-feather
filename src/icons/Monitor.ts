// VanJS Feather - Monitor
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Monitor = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21",
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21",
    }),
  );
};
