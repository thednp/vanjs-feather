// VanJS Feather - CornerLeftDown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerLeftDown = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "14 15 9 20 4 15",
    }),
    path({
      d: "M20 4h-7a4 4 0 0 0-4 4v12",
    }),
  );
};
