// VanJS Feather - Headphones
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Headphones = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M3 18v-6a9 9 0 0 1 18 0v6",
    }),
    path({
      d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
    }),
  );
};
