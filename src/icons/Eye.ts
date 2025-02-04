// VanJS Feather - Eye
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Eye = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3",
    }),
  );
};
