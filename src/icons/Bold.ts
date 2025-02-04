// VanJS Feather - Bold
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Bold = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
    path({
      d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
  );
};
