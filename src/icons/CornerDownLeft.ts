// VanJS Feather - CornerDownLeft
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerDownLeft = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "9 10 4 15 9 20",
    }),
    path({
      d: "M20 4v7a4 4 0 0 1-4 4H4",
    }),
  );
};
