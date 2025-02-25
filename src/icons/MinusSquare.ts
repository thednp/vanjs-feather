// VanJS Feather - MinusSquare
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const MinusSquare = (props?: Partial<SVGProps>) => {
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
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
};
