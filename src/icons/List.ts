// VanJS Feather - List
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const List = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    line({
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18",
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "3.01",
      y2: "6",
    }),
    line({
      x1: "3",
      y1: "12",
      x2: "3.01",
      y2: "12",
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "3.01",
      y2: "18",
    }),
  );
};
