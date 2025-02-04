// VanJS Feather - Play
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Play = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "5 3 19 12 5 21 5 3",
    }),
  );
};
