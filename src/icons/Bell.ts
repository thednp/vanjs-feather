// VanJS Feather - Bell
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Bell = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
    }),
    path({
      d: "M13.73 21a2 2 0 0 1-3.46 0",
    }),
  );
};
