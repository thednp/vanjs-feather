// VanJS Feather - Droplet
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Droplet = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
    }),
  );
};
