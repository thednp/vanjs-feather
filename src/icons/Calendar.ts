// VanJS Feather - Calendar
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Calendar = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6",
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6",
    }),
    line({
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10",
    }),
  );
};
