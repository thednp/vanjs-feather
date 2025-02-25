// VanJS Feather - Framer
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Framer = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7",
    }),
  );
};
