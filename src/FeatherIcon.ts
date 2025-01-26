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
    width,
    height,
    strokeWidth,
    stroke,
    ...rest
  } = props;

  const finalProps: Record<string, PropValueOrDerived | undefined> = {
    xmlns: ns,
    viewBox: "0 0 24 24",
    fill: "none",
    width: van.derive(() => isState(width) ? width.val : width as number || 24),
    height: van.derive(() =>
      isState(height) ? height.val : height as number || 24
    ),
    stroke: van.derive(() =>
      isState(stroke) ? stroke.val : stroke as string || "currentColor"
    ),
    "stroke-width": van.derive(() =>
      isState(strokeWidth) ? strokeWidth.val : (strokeWidth as number || 2)
    ),
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };

  if (id) {
    finalProps.id = id;
  }

  van.derive(() => {
    if (className) {
      finalProps.class = isState(className)
        ? className.val
        : (className || "") as string;
    }
  });
  van.derive(() => {
    if (style) {
      finalProps.style = isState(style) ? style.val : (style || "") as string;
    }
  });

  return svg(
    {
      ...finalProps,
      ...rest,
    },
    children,
  ) as ReturnType<TagFunc<SVGSVGElement>>;
};
