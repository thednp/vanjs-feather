// VanJS Feather - Save
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Save = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    path({
      "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    }),
    polyline({ points: "17 21 17 13 7 13 7 21" }),
    polyline({ points: "7 3 7 8 15 8" }),
  );
};
