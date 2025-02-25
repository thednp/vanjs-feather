// VanJS Feather - Video
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Video = (props?: Partial<SVGProps>) => {
  const { polygon, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "23 7 16 12 23 17 23 7",
    }),
    rect({
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2",
    }),
  );
};
