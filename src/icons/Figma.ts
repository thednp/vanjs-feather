// VanJS Feather - Figma
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Figma = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
    }),
    path({
      d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
    }),
    path({
      d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
    }),
    path({
      d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
    }),
    path({
      d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
    }),
  );
};
