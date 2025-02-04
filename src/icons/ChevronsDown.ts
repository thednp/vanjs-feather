// VanJS Feather - ChevronsDown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronsDown = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "7 13 12 18 17 13",
    }),
    polyline({
      points: "7 6 12 11 17 6",
    }),
  );
};
