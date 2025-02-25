// VanJS Feather - Database
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Database = (props?: Partial<SVGProps>) => {
  const { path, ellipse } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    ellipse({
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3",
    }),
    path({
      d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
    }),
    path({
      d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
    }),
  );
};
