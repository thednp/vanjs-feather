// VanJS Feather - ChevronsUp
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronsUp = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "17 11 12 6 7 11",
    }),
    polyline({
      points: "17 18 12 13 7 18",
    }),
  );
};
