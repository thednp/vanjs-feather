// VanJS Feather - AtSign
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const AtSign = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4",
    }),
    path({
      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
    }),
  );
};
