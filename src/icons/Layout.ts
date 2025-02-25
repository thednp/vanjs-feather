// VanJS Feather - Layout
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Layout = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9",
    }),
    line({
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9",
    }),
  );
};
