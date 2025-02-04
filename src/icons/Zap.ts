// VanJS Feather - Zap
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Zap = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    }),
  );
};
