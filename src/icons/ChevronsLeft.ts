// VanJS Feather - ChevronsLeft
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronsLeft = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "11 17 6 12 11 7",
    }),
    polyline({
      points: "18 17 13 12 18 7",
    }),
  );
};
