// VanJS Feather - CornerUpLeft
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CornerUpLeft = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "9 14 4 9 9 4",
    }),
    path({
      d: "M20 20v-7a4 4 0 0 0-4-4H4",
    }),
  );
};
