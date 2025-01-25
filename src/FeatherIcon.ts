import { type State } from "vanjs-core";
import van from "vanjs-core";

export type IconProps = {
  id?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string | "currentColor";
  class?: string;
  style?: string;
};

// VanJS Feather - FeatherIcon
export const FeatherIcon = (
  props: IconProps = {},
  ...children: ChildNode[]
) => {
  const ns = "http://www.w3.org/2000/svg";
  const svg = van.tags(ns).svg;
  const {
    id,
    class: className,
    style,
    width: w,
    height: h,
    strokeWidth: sw,
    stroke: s,
    ...rest
  } = props;

  const iconProps: Record<string, number | string | State<string | number>> = {
    xmlns: ns,
    width: van.state(w || 24),
    height: van.state(h || 24),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: van.state(s || "currentColor"),
    "stroke-width": van.state(sw || 2),
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };
  if (id) {
    iconProps.id = id;
  }
  if (className) {
    iconProps.class = van.state(className);
  }
  if (style) {
    iconProps.style = van.state(style);
  }

  return svg(
    {
      ...iconProps,
      ...rest,
    },
    children,
  );
};
