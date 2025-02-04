// VanJS Feather - ChevronRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ChevronRight = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "9 18 15 12 9 6",
    }),
  );
};
