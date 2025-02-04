// VanJS Feather - Edit2
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Edit2 = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
    }),
  );
};
