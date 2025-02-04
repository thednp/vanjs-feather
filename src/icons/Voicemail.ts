// VanJS Feather - Voicemail
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Voicemail = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "5.5",
      cy: "11.5",
      r: "4.5",
    }),
    circle({
      cx: "18.5",
      cy: "11.5",
      r: "4.5",
    }),
    line({
      x1: "5.5",
      y1: "16",
      x2: "18.5",
      y2: "16",
    }),
  );
};
