// VanJS Feather - Compass
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Compass = (props: Partial<SVGProps> = {}) => {
  const { circle, polygon } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      "r": "10",
    }),
    polygon({
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
    }),
  );
};
