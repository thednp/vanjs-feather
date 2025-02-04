// VanJS Feather - Airplay
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Airplay = (props?: IconProps) => {
  const { path, polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
    }),
    polygon({
      points: "12 15 17 21 7 21 12 15",
    }),
  );
};
