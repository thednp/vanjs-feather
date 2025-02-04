// VanJS Feather - Server
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Server = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    rect({
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "6.01",
      y2: "6",
    }),
    line({
      x1: "6",
      y1: "18",
      x2: "6.01",
      y2: "18",
    }),
  );
};
