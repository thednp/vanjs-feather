// VanJS Feather - Moon
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Moon = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
    }),
  );
};
