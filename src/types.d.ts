import type { State, TagFunc } from "vanjs-core";

type PropValueOrDerived<T> = T | State<T>;

interface EventHandler<T, E extends Event> {
  (
    e: E & {
      currentTarget: T;
      target: EventTarget & Element;
    },
  ): void;
}
interface BoundEventHandler<
  T,
  E extends Event,
  EHandler extends EventHandler<T, unknown> = EventHandler<T, E>,
> {
  0: (data: unknown, ...e: Parameters<EHandler>) => void;
  1: unknown;
}

type EventHandlerUnion<
  T,
  E extends Event,
  EHandler extends EventHandler<T, unknown> = EventHandler<T, E>,
> = EHandler | BoundEventHandler<T, E, EHandler>;

interface DOMAttributes<T> {
  oncopy?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncut?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  onpaste?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncompositionend?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionstart?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionupdate?: EventHandlerUnion<T, CompositionEvent> | undefined;
  onfocusout?: FocusEventHandlerUnion<T, FocusEvent> | undefined;
  onfocusin?: FocusEventHandlerUnion<T, FocusEvent> | undefined;
  onencrypted?: EventHandlerUnion<T, Event> | undefined;
  ondragexit?: EventHandlerUnion<T, DragEvent> | undefined;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /**
   * Identifies the currently active element when DOM focus is on a composite widget, textbox,
   * group, or application.
   */
  "aria-activedescendant"?: string | undefined;
  /**
   * Indicates whether assistive technologies will present all, or only parts of, the changed
   * region based on the change notifications defined by the aria-relevant attribute.
   */
  "aria-atomic"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the
   * user's intended value for an input and specifies how predictions would be presented if they
   * are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /**
   * Indicates an element is being modified and that assistive technologies MAY want to wait until
   * the modifications are complete before exposing them to the user.
   */
  "aria-busy"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   *
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   *
   * @see aria-colindex.
   */
  "aria-colcount"?: number | string | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns
   * within a table, grid, or treegrid.
   *
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | string | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
   * treegrid.
   *
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | string | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current
   * element.
   *
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /**
   * Indicates the element that represents the current item within a container or set of related
   * elements.
   */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   *
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   *
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
   * operable.
   *
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop
   * target.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "popup"
    | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   *
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded
   * or collapsed.
   */
  "aria-expanded"?: boolean | "false" | "true" | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at
   * the user's discretion, allows assistive technology to override the general default of reading
   * in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog,
   * that can be triggered by an element.
   */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   *
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   *
   * @see aria-errormessage.
   */
  "aria-invalid"?:
    | boolean
    | "false"
    | "true"
    | "grammar"
    | "spelling"
    | undefined;
  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
   * element.
   */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   *
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   *
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | string | undefined;
  /**
   * Indicates that an element will be updated, and describes the types of updates the user
   * agents, assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true" | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates that the user may select more than one item from the current selectable
   * descendants.
   */
  "aria-multiselectable"?: boolean | "false" | "true" | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual
   * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
   * represent the relationship.
   *
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
   * the control has no value. A hint could be a sample value or a brief description of the
   * expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not
   * required if all elements in the set are present in the DOM.
   *
   * @see aria-setsize.
   */
  "aria-posinset"?: number | string | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   *
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   *
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a
   * live region is modified.
   *
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals"
    | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true" | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   *
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | string | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a
   * table, grid, or treegrid.
   *
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | string | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   *
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | string | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   *
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true" | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all
   * elements in the set are present in the DOM.
   *
   * @see aria-posinset.
   */
  "aria-setsize"?: number | string | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | string | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | string | undefined;
  /**
   * Defines the current value for a range widget.
   *
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | string | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
  role?:
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "meter"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | undefined;
}

interface NewViewportSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}

interface TransformableSVGAttributes {
  transform?: string | undefined;
}

interface ContainerElementSVGAttributes<T> extends
  CoreSVGAttributes<T>,
  Pick<
    PresentationSVGAttributes,
    | "clip-path"
    | "mask"
    | "cursor"
    | "opacity"
    | "filter"
    | "enable-background"
    | "color-interpolation"
    | "color-rendering"
  > {}
interface FilterPrimitiveElementSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "color-interpolation-filters"> {
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  result?: string | undefined;
}
interface StylableSVGAttributes {
  class?: string | undefined;
  style?: string | undefined;
}
interface FitToViewBoxSVGAttributes {
  viewBox?: string | undefined;
  preserveAspectRatio?: SVGPreserveAspectRatio | undefined;
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  id?: string | undefined;
  lang?: string | undefined;
  tabIndex?: number | string | undefined;
  tabindex?: number | string | undefined;
}
interface PresentationSVGAttributes {
  "alignment-baseline"?:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit"
    | undefined;
  "baseline-shift"?: number | string | undefined;
  clip?: string | undefined;
  "clip-path"?: string | undefined;
  "clip-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  color?: string | undefined;
  "color-interpolation"?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  "color-interpolation-filters"?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  "color-profile"?: string | undefined;
  "color-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "optimizeQuality"
    | "inherit"
    | undefined;
  cursor?: string | undefined;
  direction?: "ltr" | "rtl" | "inherit" | undefined;
  display?: string | undefined;
  "dominant-baseline"?:
    | "auto"
    | "text-bottom"
    | "alphabetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "hanging"
    | "text-top"
    | "inherit"
    | undefined;
  "enable-background"?: string | undefined;
  fill?: string | undefined;
  "fill-opacity"?: number | string | "inherit" | undefined;
  "fill-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: string | undefined;
  "flood-color"?: string | undefined;
  "flood-opacity"?: number | string | "inherit" | undefined;
  "font-family"?: string | undefined;
  "font-size"?: string | undefined;
  "font-size-adjust"?: number | string | undefined;
  "font-stretch"?: string | undefined;
  "font-style"?: "normal" | "italic" | "oblique" | "inherit" | undefined;
  "font-variant"?: string | undefined;
  "font-weight"?: number | string | undefined;
  "glyph-orientation-horizontal"?: string | undefined;
  "glyph-orientation-vertical"?: string | undefined;
  "image-rendering"?:
    | "auto"
    | "optimizeQuality"
    | "optimizeSpeed"
    | "inherit"
    | undefined;
  kerning?: string | undefined;
  "letter-spacing"?: number | string | undefined;
  "lighting-color"?: string | undefined;
  "marker-end"?: string | undefined;
  "marker-mid"?: string | undefined;
  "marker-start"?: string | undefined;
  mask?: string | undefined;
  opacity?: number | string | "inherit" | undefined;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | undefined;
  pathLength?: string | number | undefined;
  "pointer-events"?:
    | "bounding-box"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "color"
    | "fill"
    | "stroke"
    | "all"
    | "none"
    | "inherit"
    | undefined;
  "shape-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "crispEdges"
    | "geometricPrecision"
    | "inherit"
    | undefined;
  "stop-color"?: string | undefined;
  "stop-opacity"?: number | string | "inherit" | undefined;
  stroke?: string | undefined;
  "stroke-dasharray"?: string | undefined;
  "stroke-dashoffset"?: number | string | undefined;
  "stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined;
  "stroke-linejoin"?:
    | "arcs"
    | "bevel"
    | "miter"
    | "miter-clip"
    | "round"
    | "inherit"
    | undefined;
  "stroke-miterlimit"?: number | string | "inherit" | undefined;
  "stroke-opacity"?: number | string | "inherit" | undefined;
  "stroke-width"?: number | string | undefined;
  "text-anchor"?: "start" | "middle" | "end" | "inherit" | undefined;
  "text-decoration"?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "blink"
    | "inherit"
    | undefined;
  "text-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "optimizeLegibility"
    | "geometricPrecision"
    | "inherit"
    | undefined;
  "unicode-bidi"?: string | undefined;
  visibility?: "visible" | "hidden" | "collapse" | "inherit" | undefined;
  "word-spacing"?: number | string | undefined;
  "writing-mode"?:
    | "lr-tb"
    | "rl-tb"
    | "tb-rl"
    | "lr"
    | "rl"
    | "tb"
    | "inherit"
    | undefined;
}
interface NewViewportSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface ZoomAndPanSVGAttributes {
  zoomAndPan?: "disable" | "magnify" | undefined;
}

interface SvgSVGAttributes<T>
  extends
    ContainerElementSVGAttributes<T>,
    NewViewportSVGAttributes<T>,
    FilterPrimitiveElementSVGAttributes<T>,
    StylableSVGAttributes,
    TransformableSVGAttributes,
    FitToViewBoxSVGAttributes,
    ZoomAndPanSVGAttributes,
    PresentationSVGAttributes {
  /** @deprecated */
  version?: string | undefined;
  baseProfile?: string | undefined;
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  contentScriptType?: string | undefined;
  contentStyleType?: string | undefined;
  xmlns?: string | undefined;
  "xmlns:xlink"?: string | undefined;
}

export type SVGProps = {
  [K in keyof SvgSVGAttributes<SVGSVGElement>]:
    | PropValueOrDerived<SvgSVGAttributes<SVGSVGElement>[K]>
    | undefined;
};

export const SVGTag: (
  props?: Partial<SVGProps>,
) => ReturnType<TagFunc<SVGSVGElement>>;
