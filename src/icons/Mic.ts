// VanJS Feather - Mic
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Mic = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
    }),
    path({
      d: "M19 10v2a7 7 0 0 1-14 0v-2",
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23",
    }),
    line({
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23",
    }),
  );
};
