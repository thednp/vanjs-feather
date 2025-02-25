// VanJS Feather - Eye
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Eye = (props?: Partial<SVGProps>) => {
  const { path, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3",
    }),
  );
};
