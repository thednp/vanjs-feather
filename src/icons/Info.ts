// VanJS Feather - Info
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Info = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8",
    }),
  );
};
