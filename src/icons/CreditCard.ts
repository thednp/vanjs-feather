// VanJS Feather - CreditCard
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CreditCard = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10",
    }),
  );
};
