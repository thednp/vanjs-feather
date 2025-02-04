// VanJS Feather - Mail
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Mail = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    }),
    polyline({
      points: "22,6 12,13 2,6",
    }),
  );
};
