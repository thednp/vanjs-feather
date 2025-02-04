// VanJS Feather - Navigation2
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Navigation2 = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 19 21 12 17 5 21 12 2",
    }),
  );
};
