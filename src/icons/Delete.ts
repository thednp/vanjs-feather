// VanJS Feather - Delete
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Delete = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
    }),
    line({
      x1: "18",
      y1: "9",
      x2: "12",
      y2: "15",
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "18",
      y2: "15",
    }),
  );
};
