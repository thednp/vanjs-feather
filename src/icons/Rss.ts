// VanJS Feather - Rss
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Rss = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 11a9 9 0 0 1 9 9",
    }),
    path({
      d: "M4 4a16 16 0 0 1 16 16",
    }),
    circle({
      cx: "5",
      cy: "19",
      r: "1",
    }),
  );
};
