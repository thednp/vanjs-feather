// VanJS Feather - BookOpen
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const BookOpen = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    }),
    path({
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    }),
  );
};
