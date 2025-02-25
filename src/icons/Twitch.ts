// VanJS Feather - Twitch
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Twitch = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
    }),
  );
};
