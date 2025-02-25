// VanJS Feather - Droplet
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Droplet = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
    }),
  );
};
