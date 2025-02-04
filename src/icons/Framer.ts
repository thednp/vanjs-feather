// VanJS Feather - Framer
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Framer = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7",
    }),
  );
};
