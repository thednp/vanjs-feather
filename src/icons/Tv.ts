// VanJS Feather - Tv
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Tv = (props?: IconProps) => {
  const { polyline, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2",
    }),
    polyline({
      points: "17 2 12 7 7 2",
    }),
  );
};
