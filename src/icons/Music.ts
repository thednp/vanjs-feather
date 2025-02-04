// VanJS Feather - Music
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Music = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M9 18V5l12-2v13",
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3",
    }),
    circle({
      cx: "18",
      cy: "16",
      r: "3",
    }),
  );
};
