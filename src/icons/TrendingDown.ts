// VanJS Feather - TrendingDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const TrendingDown = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 18 13.5 8.5 8.5 13.5 1 6",
    }),
    polyline({
      points: "17 18 23 18 23 12",
    }),
  );
};
