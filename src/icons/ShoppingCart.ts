// VanJS Feather - ShoppingCart
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ShoppingCart = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "9",
      cy: "21",
      r: "1",
    }),
    circle({
      cx: "20",
      cy: "21",
      r: "1",
    }),
    path({
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
    }),
  );
};
