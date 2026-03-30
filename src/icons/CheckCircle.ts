// VanJS Feather - CheckCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const CheckCircle = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    path({ "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    polyline({ points: "22 4 12 14.01 9 11.01" }),
  );
};
