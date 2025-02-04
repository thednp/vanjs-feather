// VanJS Feather - Battery
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Battery = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "6",
      width: "18",
      height: "12",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11",
    }),
  );
};
