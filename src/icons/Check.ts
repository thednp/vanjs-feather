// VanJS Feather - Check
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Check = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "20 6 9 17 4 12",
    }),
  );
};
