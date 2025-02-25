import { State } from 'vanjs-core';

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

type SVGProps = {
  [K in keyof SvgSVGAttributes<SVGSVGElement>]:
    | PropValueOrDerived<SvgSVGAttributes<SVGSVGElement>[K]>
    | undefined;
};

declare const Activity: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Airplay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlertCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlertOctagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlertTriangle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignJustify: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Anchor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Aperture: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Archive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeftCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRightCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AtSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Award: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BarChart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BarChart2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Battery: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryCharging: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bell: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bluetooth: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bold: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Book: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bookmark: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Box: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Briefcase: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Calendar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Camera: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CameraOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cast: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Check: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CheckCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CheckSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Chrome: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Circle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clipboard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cloud: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudDrizzle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudLightning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudRain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudSnow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Code: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Codepen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Codesandbox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Coffee: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Columns: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Command: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Compass: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Copy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerLeftDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerLeftUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerRightDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerRightUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cpu: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CreditCard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Crop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Crosshair: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Database: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Delete: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Disc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Divide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DivideCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DivideSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Download: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DownloadCloud: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dribbble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Droplet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Edit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Edit2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Edit3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ExternalLink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Eye: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EyeOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Facebook: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FastForward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Feather: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Figma: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const File: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Film: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Filter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Folder: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Framer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Frown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gift: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitBranch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitCommit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitMerge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequest: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Github: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gitlab: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Globe: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HardDrive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Headphones: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HelpCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hexagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Home: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Image: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Inbox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Info: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Instagram: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Italic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Key: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Layers: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Layout: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LifeBuoy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Link: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Link2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Linkedin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const List: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Loader: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LogIn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LogOut: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Map: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Maximize: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Maximize2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Meh: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Menu: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MicOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minimize: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minimize2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MinusCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MinusSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Monitor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Moon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoreHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoreVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Move: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Music: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Navigation: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Navigation2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Octagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Package: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Paperclip: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pause: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PauseCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PenTool: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Percent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Phone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneCall: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneForwarded: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneIncoming: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneMissed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneOutgoing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PieChart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Play: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlayCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Plus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlusCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlusSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pocket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Power: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Printer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radio: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCcw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Repeat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rewind: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCcw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rss: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Save: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scissors: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Search: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Send: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Server: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Settings: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Share: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Share2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shield: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShoppingBag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShoppingCart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shuffle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sidebar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SkipBack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SkipForward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Slack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Slash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sliders: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Smartphone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Smile: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Speaker: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Square: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Star: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StopCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sun: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sunrise: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sunset: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Table: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tablet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Target: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Terminal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Thermometer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThumbsDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThumbsUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ToggleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ToggleRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tool: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trash2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trello: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrendingDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrendingUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Triangle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Truck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tv: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Twitch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Twitter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Type: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Umbrella: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Underline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Unlock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Upload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UploadCloud: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const User: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Users: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Video: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VideoOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Voicemail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VolumeX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Watch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wifi: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WifiOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wind: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const X: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const XCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const XOctagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const XSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Youtube: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Zap: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZapOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZoomIn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZoomOut: (props?: Partial<SVGProps>) => SVGSVGElement;

export { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart, BarChart2, Battery, BatteryCharging, Bell, BellOff, Bluetooth, Bold, Book, BookOpen, Bookmark, Box, Briefcase, Calendar, Camera, CameraOff, Cast, Check, CheckCircle, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, Cloud, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, Divide, DivideCircle, DivideSquare, DollarSign, Download, DownloadCloud, Dribbble, Droplet, Edit, Edit2, Edit3, ExternalLink, Eye, EyeOff, Facebook, FastForward, Feather, Figma, File, FileMinus, FilePlus, FileText, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, Github, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, Map, MapPin, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, Minus, MinusCircle, MinusSquare, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, Pause, PauseCircle, PenTool, Percent, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Table, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, X, XCircle, XOctagon, XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };
