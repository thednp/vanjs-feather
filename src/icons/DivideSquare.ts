// VanJS Feather - DivideSquare
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const DivideSquare = (props?: IconProps) => {
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
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8",
    }),
  );
};
