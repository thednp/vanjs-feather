// VanJS Feather - File
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const File = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
    }),
    polyline({
      points: "13 2 13 9 20 9",
    }),
  );
};
