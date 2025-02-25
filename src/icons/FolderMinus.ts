// VanJS Feather - FolderMinus
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const FolderMinus = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14",
    }),
  );
};
