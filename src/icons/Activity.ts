// VanJS Feather - Activity
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Activity = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 18 12 15 21 9 3 6 12 2 12",
    }),
  );
};
