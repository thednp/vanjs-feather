// VanJS Feather - Bold
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Bold = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
    path({
      d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
  );
};
