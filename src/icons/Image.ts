// VanJS Feather - Image
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Image = (props?: Partial<SVGProps>) => {
  const { polyline, circle, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    circle({
      cx: "8.5",
      cy: "8.5",
      r: "1.5",
    }),
    polyline({
      points: "21 15 16 10 5 21",
    }),
  );
};
