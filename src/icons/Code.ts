// VanJS Feather - Code
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Code = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "16 18 22 12 16 6",
    }),
    polyline({
      points: "8 6 2 12 8 18",
    }),
  );
};
