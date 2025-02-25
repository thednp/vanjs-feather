// VanJS Feather - PauseCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const PauseCircle = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "10",
      y1: "15",
      x2: "10",
      y2: "9",
    }),
    line({
      x1: "14",
      y1: "15",
      x2: "14",
      y2: "9",
    }),
  );
};
