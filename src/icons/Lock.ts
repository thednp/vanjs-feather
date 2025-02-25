// VanJS Feather - Lock
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Lock = (props?: Partial<SVGProps>) => {
  const { path, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2",
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 10 0v4",
    }),
  );
};
