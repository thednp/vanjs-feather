// VanJS Feather - User
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const User = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "12",
      cy: "7",
      r: "4",
    }),
  );
};
