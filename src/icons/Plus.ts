// VanJS Feather - Plus
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Plus = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
  );
};
