// VanJS Feather - Save
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Save = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    }),
    polyline({
      points: "17 21 17 13 7 13 7 21",
    }),
    polyline({
      points: "7 3 7 8 15 8",
    }),
  );
};
