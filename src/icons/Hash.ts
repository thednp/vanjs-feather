// VanJS Feather - Hash
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Hash = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "9",
      x2: "20",
      y2: "9",
    }),
    line({
      x1: "4",
      y1: "15",
      x2: "20",
      y2: "15",
    }),
    line({
      x1: "10",
      y1: "3",
      x2: "8",
      y2: "21",
    }),
    line({
      x1: "16",
      y1: "3",
      x2: "14",
      y2: "21",
    }),
  );
};
