// VanJS Feather - CornerRightUp
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerRightUp = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "10 9 15 4 20 9",
    }),
    path({
      d: "M4 20h7a4 4 0 0 0 4-4V4",
    }),
  );
};
