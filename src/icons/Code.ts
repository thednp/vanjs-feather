// VanJS Feather - Code
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Code = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 18 22 12 16 6",
    }),
    polyline({
      points: "8 6 2 12 8 18",
    }),
  );
};
