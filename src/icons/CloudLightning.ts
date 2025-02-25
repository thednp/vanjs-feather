// VanJS Feather - CloudLightning
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CloudLightning = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9",
    }),
    polyline({
      points: "13 11 9 17 15 17 11 23",
    }),
  );
};
