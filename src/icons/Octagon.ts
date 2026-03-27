// VanJS Feather - Octagon
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Octagon = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points:
        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
    }),
  );
};
