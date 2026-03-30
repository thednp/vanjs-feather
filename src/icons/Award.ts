// VanJS Feather - Award
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Award = (props: Partial<SVGProps> = {}) => {
  const { circle, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "8",
      "r": "7",
    }),
    polyline({ points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }),
  );
};
