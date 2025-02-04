// VanJS Feather - ChevronsRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronsRight = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "13 17 18 12 13 7",
    }),
    polyline({
      points: "6 17 11 12 6 7",
    }),
  );
};
