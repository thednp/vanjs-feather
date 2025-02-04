// VanJS Feather - Cloud
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Cloud = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
    }),
  );
};
