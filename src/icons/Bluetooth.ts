// VanJS Feather - Bluetooth
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Bluetooth = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5",
    }),
  );
};
