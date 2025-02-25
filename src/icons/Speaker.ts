// VanJS Feather - Speaker
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Speaker = (props?: Partial<SVGProps>) => {
  const { circle, line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    circle({
      cx: "12",
      cy: "14",
      r: "4",
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12.01",
      y2: "6",
    }),
  );
};
