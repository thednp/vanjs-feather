// VanJS Feather - Tv
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Tv = (props: Partial<SVGProps> = {}) => {
  const { rect, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "2",
      "y": "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2",
    }),
    polyline({ points: "17 2 12 7 7 2" }),
  );
};
