// VanJS Feather - Menu
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Menu = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18",
    }),
  );
};
