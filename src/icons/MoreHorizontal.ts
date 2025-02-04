// VanJS Feather - MoreHorizontal
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MoreHorizontal = (props?: IconProps) => {
  const { circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "19",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "5",
      cy: "12",
      r: "1",
    }),
  );
};
