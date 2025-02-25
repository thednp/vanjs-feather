// VanJS Feather - Award
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Award = (props?: Partial<SVGProps>) => {
  const { polyline, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "8",
      r: "7",
    }),
    polyline({
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
    }),
  );
};
