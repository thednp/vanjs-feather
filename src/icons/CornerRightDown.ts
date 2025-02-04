// VanJS Feather - CornerRightDown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerRightDown = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "10 15 15 20 20 15",
    }),
    path({
      d: "M4 4h7a4 4 0 0 1 4 4v12",
    }),
  );
};
