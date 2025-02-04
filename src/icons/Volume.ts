// VanJS Feather - Volume
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Volume = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
  );
};
