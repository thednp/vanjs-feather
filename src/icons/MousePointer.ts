// VanJS Feather - MousePointer
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const MousePointer = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
    }),
    path({
      d: "M13 13l6 6",
    }),
  );
};
