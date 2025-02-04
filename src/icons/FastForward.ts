// VanJS Feather - FastForward
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const FastForward = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "13 19 22 12 13 5 13 19",
    }),
    polygon({
      points: "2 19 11 12 2 5 2 19",
    }),
  );
};
