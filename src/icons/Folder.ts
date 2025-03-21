// VanJS Feather - Folder
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Folder = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
  );
};
