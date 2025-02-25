// VanJS Feather - Film
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Film = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2.18",
      ry: "2.18",
    }),
    line({
      x1: "7",
      y1: "2",
      x2: "7",
      y2: "22",
    }),
    line({
      x1: "17",
      y1: "2",
      x2: "17",
      y2: "22",
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    line({
      x1: "2",
      y1: "7",
      x2: "7",
      y2: "7",
    }),
    line({
      x1: "2",
      y1: "17",
      x2: "7",
      y2: "17",
    }),
    line({
      x1: "17",
      y1: "17",
      x2: "22",
      y2: "17",
    }),
    line({
      x1: "17",
      y1: "7",
      x2: "22",
      y2: "7",
    }),
  );
};
