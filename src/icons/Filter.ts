// VanJS Feather - Filter
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Filter = (props?: IconProps) => {
  const { polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    }),
  );
};
