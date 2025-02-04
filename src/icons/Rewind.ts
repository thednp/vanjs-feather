// VanJS Feather - Rewind
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Rewind = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "11 19 2 12 11 5 11 19",
    }),
    polygon({
      points: "22 19 13 12 22 5 22 19",
    }),
  );
};
