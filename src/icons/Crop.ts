// VanJS Feather - Crop
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Crop = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6.13 1L6 16a2 2 0 0 0 2 2h15",
    }),
    path({
      d: "M1 6.13L16 6a2 2 0 0 1 2 2v15",
    }),
  );
};
