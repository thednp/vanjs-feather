// VanJS Feather - Repeat
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Repeat = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "17 1 21 5 17 9",
    }),
    path({
      d: "M3 11V9a4 4 0 0 1 4-4h14",
    }),
    polyline({
      points: "7 23 3 19 7 15",
    }),
    path({
      d: "M21 13v2a4 4 0 0 1-4 4H3",
    }),
  );
};
