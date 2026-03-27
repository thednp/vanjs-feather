// VanJS Feather - Italic
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Italic = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "4",
      x2: "10",
      y2: "4",
    }),
    line({
      x1: "14",
      y1: "20",
      x2: "5",
      y2: "20",
    }),
    line({
      x1: "15",
      y1: "4",
      x2: "9",
      y2: "20",
    }),
  );
};
