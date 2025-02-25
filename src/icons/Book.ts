// VanJS Feather - Book
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Book = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    }),
    path({
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    }),
  );
};
