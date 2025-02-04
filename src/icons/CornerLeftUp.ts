// VanJS Feather - CornerLeftUp
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerLeftUp = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "14 9 9 4 4 9",
    }),
    path({
      d: "M20 20h-7a4 4 0 0 1-4-4V4",
    }),
  );
};
