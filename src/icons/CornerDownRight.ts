// VanJS Feather - CornerDownRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerDownRight = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "15 10 20 15 15 20",
    }),
    path({
      d: "M4 4v7a4 4 0 0 0 4 4h12",
    }),
  );
};
