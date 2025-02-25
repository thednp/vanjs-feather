// VanJS Feather - Tv
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Tv = (props?: Partial<SVGProps>) => {
  const { polyline, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2",
    }),
    polyline({
      points: "17 2 12 7 7 2",
    }),
  );
};
