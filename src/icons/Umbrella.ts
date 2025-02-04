// VanJS Feather - Umbrella
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Umbrella = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7",
    }),
  );
};
