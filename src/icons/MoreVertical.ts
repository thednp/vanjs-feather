// VanJS Feather - MoreVertical
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MoreVertical = (props?: IconProps) => {
  const { circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "12",
      cy: "5",
      r: "1",
    }),
    circle({
      cx: "12",
      cy: "19",
      r: "1",
    }),
  );
};
