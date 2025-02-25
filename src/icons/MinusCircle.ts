// VanJS Feather - MinusCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const MinusCircle = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
};
