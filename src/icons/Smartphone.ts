// VanJS Feather - Smartphone
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Smartphone = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
  );
};
