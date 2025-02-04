// VanJS Feather - Send
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Send = (props?: IconProps) => {
  const { polygon, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13",
    }),
    polygon({
      points: "22 2 15 22 11 13 2 9 22 2",
    }),
  );
};
