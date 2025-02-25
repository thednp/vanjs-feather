// VanJS Feather - Voicemail
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Voicemail = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "5.5",
      cy: "11.5",
      r: "4.5",
    }),
    circle({
      cx: "18.5",
      cy: "11.5",
      r: "4.5",
    }),
    line({
      x1: "5.5",
      y1: "16",
      x2: "18.5",
      y2: "16",
    }),
  );
};
