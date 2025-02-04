// VanJS Feather - Navigation
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Navigation = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "3 11 22 2 13 21 11 13 3 11",
    }),
  );
};
