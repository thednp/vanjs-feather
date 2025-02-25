// VanJS Feather - Layers
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Layers = (props?: Partial<SVGProps>) => {
  const { polyline, polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 2 7 12 12 22 7 12 2",
    }),
    polyline({
      points: "2 17 12 22 22 17",
    }),
    polyline({
      points: "2 12 12 17 22 12",
    }),
  );
};
