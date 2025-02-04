// VanJS Feather - CornerUpRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerUpRight = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "15 14 20 9 15 4",
    }),
    path({
      d: "M4 20v-7a4 4 0 0 1 4-4h12",
    }),
  );
};
