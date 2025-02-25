// VanJS Feather - Briefcase
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Briefcase = (props?: Partial<SVGProps>) => {
  const { path, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    path({
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    }),
  );
};
