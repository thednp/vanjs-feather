// VanJS Feather - Camera
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Camera = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
    }),
    circle({
      cx: "12",
      cy: "13",
      r: "4",
    }),
  );
};
