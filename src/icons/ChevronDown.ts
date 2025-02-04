// VanJS Feather - ChevronDown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronDown = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 12 15 18 9",
    }),
  );
};
