// VanJS Feather - UserCheck
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const UserCheck = (props?: IconProps) => {
  const { polyline, path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    polyline({
      points: "17 11 19 13 23 9",
    }),
  );
};
