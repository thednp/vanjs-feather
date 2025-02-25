// VanJS Feather - Feather
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Feather = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
    }),
    line({
      x1: "16",
      y1: "8",
      x2: "2",
      y2: "22",
    }),
    line({
      x1: "17.5",
      y1: "15",
      x2: "9",
      y2: "15",
    }),
  );
};
