// VanJS Feather - Target
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Target = (props?: IconProps) => {
  const { circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "6",
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "2",
    }),
  );
};
