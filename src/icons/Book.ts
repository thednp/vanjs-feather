// VanJS Feather - Book
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Book = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    }),
    path({
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    }),
  );
};
