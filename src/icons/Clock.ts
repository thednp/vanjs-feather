// VanJS Feather - Clock
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Clock = (props?: Partial<SVGProps>) => {
  const { polyline, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "12 6 12 12 16 14",
    }),
  );
};
