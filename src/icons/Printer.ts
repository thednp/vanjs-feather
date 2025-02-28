// VanJS Feather - Printer
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Printer = (props?: Partial<SVGProps>) => {
  const { polyline, path, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 6 2 18 2 18 9",
    }),
    path({
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    }),
    rect({
      x: "6",
      y: "14",
      width: "12",
      height: "8",
    }),
  );
};
