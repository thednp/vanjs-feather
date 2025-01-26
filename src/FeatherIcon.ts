import type {
  ChildDom,
  PropValue,
  PropValueOrDerived,
  State,
  TagFunc,
} from "vanjs-core";
import van from "vanjs-core";

export type IconProps = {
  id?: string;
  width?: number | State<number | undefined>;
  height?: number | State<number | undefined>;
  strokeWidth?: number | State<number | undefined>;
  stroke?: string | "currentColor" | State<string | "currentColor">;
  class?: string | State<string | undefined>;
  style?: string | State<string | undefined>;
};

const isState = (v: unknown): v is State<PropValue> => {
  return v !== null && typeof v === "object" && "val" in v;
};

// VanJS Feather - FeatherIcon
export const FeatherIcon = (
  props: Partial<IconProps> = {},
  ...children: ChildDom[]
) => {
  const ns = "http://www.w3.org/2000/svg";
  const { svg } = van.tags(ns);
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

  // const iconProps: Record<string, number | string | State<string | number>> = {
  // const finalProps: Record<string, PropValueOrDerived | undefined> = {
  const finalProps: Record<string, PropValueOrDerived | undefined> = {
    xmlns: ns,
    id: id,
    class: van.derive(() =>
      isState(className) ? className.val : className as string
    ),
    style: van.derive(() => isState(style) ? style.val : style as string),
    width: van.derive(() => isState(w) ? w.val : w as number || 24),
    height: van.derive(() => isState(h) ? h.val : h as number || 24),
    stroke: van.derive(() =>
      isState(s) ? s.val : s as string || "currentColor"
    ),
    "stroke-width": van.derive(() =>
      isState(sw) ? sw.val : (sw as number || 2)
    ),
    viewBox: "0 0 24 24",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };

  return svg(
    {
      ...finalProps,
      ...rest,
    },
    children,
  ) as ReturnType<TagFunc<SVGSVGElement>>;
};
