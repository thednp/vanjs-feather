// VanJS Feather - Bookmark
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Bookmark = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    }),
  );
};
