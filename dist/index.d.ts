/*!
* vanjs-feather ESM v0.1.6 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { State } from "vanjs-core";

//#region src/types.d.ts
type PropValueOrDerived<T> = T | State<T>;
interface EventHandler<T, E extends Event = Event> {
  (e: E & {
    currentTarget: T;
    target: EventTarget & Element;
  }): void;
}
interface BoundEventHandler<T, E extends Event, EHandler extends EventHandler<T, E> = EventHandler<T, E>> {
  0: (data: unknown, ...e: Parameters<EHandler>) => void;
  1: unknown;
}
type EventHandlerUnion<T, E extends Event, EHandler extends EventHandler<T, E> = EventHandler<T, E>> = EHandler | BoundEventHandler<T, E, EHandler>;
interface DOMAttributes<T> {
  oncopy?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncut?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  onpaste?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncompositionend?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionstart?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionupdate?: EventHandlerUnion<T, CompositionEvent> | undefined;
  onfocusout?: EventHandlerUnion<T, FocusEvent> | undefined;
  onfocusin?: EventHandlerUnion<T, FocusEvent> | undefined;
  onencrypted?: EventHandlerUnion<T, Event> | undefined;
  ondragexit?: EventHandlerUnion<T, DragEvent> | undefined;
}
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
  "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
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
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
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
  "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
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
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
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
  "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
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
  role?: "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "meter" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | undefined;
}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface TransformableSVGAttributes {
  transform?: string | undefined;
}
interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "clip-path" | "mask" | "cursor" | "opacity" | "filter" | "enable-background" | "color-interpolation" | "color-rendering"> {}
interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "color-interpolation-filters"> {
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
  "alignment-baseline"?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;
  "baseline-shift"?: number | string | undefined;
  clip?: string | undefined;
  "clip-path"?: string | undefined;
  "clip-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  color?: string | undefined;
  "color-interpolation"?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
  "color-interpolation-filters"?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
  "color-profile"?: string | undefined;
  "color-rendering"?: "auto" | "optimizeSpeed" | "optimizeQuality" | "inherit" | undefined;
  cursor?: string | undefined;
  direction?: "ltr" | "rtl" | "inherit" | undefined;
  display?: string | undefined;
  "dominant-baseline"?: "auto" | "text-bottom" | "alphabetic" | "ideographic" | "middle" | "central" | "mathematical" | "hanging" | "text-top" | "inherit" | undefined;
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
  "image-rendering"?: "auto" | "optimizeQuality" | "optimizeSpeed" | "inherit" | undefined;
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
  "pointer-events"?: "bounding-box" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "color" | "fill" | "stroke" | "all" | "none" | "inherit" | undefined;
  "shape-rendering"?: "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | "inherit" | undefined;
  "stop-color"?: string | undefined;
  "stop-opacity"?: number | string | "inherit" | undefined;
  stroke?: string | undefined;
  "stroke-dasharray"?: string | undefined;
  "stroke-dashoffset"?: number | string | undefined;
  "stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined;
  "stroke-linejoin"?: "arcs" | "bevel" | "miter" | "miter-clip" | "round" | "inherit" | undefined;
  "stroke-miterlimit"?: number | string | "inherit" | undefined;
  "stroke-opacity"?: number | string | "inherit" | undefined;
  "stroke-width"?: number | string | undefined;
  "text-anchor"?: "start" | "middle" | "end" | "inherit" | undefined;
  "text-decoration"?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit" | undefined;
  "text-rendering"?: "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | "inherit" | undefined;
  "unicode-bidi"?: string | undefined;
  visibility?: "visible" | "hidden" | "collapse" | "inherit" | undefined;
  "word-spacing"?: number | string | undefined;
  "writing-mode"?: "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit" | undefined;
}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface ZoomAndPanSVGAttributes {
  zoomAndPan?: "disable" | "magnify" | undefined;
}
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes, TransformableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes {
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
type SVGProps = { [K in keyof SvgSVGAttributes<SVGSVGElement>]: PropValueOrDerived<SvgSVGAttributes<SVGSVGElement>[K]> | undefined };
//#endregion
//#region src/icons/Activity.d.ts
declare const Activity: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Airplay.d.ts
declare const Airplay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlertCircle.d.ts
declare const AlertCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlertOctagon.d.ts
declare const AlertOctagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlertTriangle.d.ts
declare const AlertTriangle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignCenter.d.ts
declare const AlignCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignJustify.d.ts
declare const AlignJustify: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignLeft.d.ts
declare const AlignLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignRight.d.ts
declare const AlignRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Anchor.d.ts
declare const Anchor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Aperture.d.ts
declare const Aperture: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Archive.d.ts
declare const Archive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDown.d.ts
declare const ArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownCircle.d.ts
declare const ArrowDownCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownLeft.d.ts
declare const ArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownRight.d.ts
declare const ArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeft.d.ts
declare const ArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeftCircle.d.ts
declare const ArrowLeftCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRight.d.ts
declare const ArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRightCircle.d.ts
declare const ArrowRightCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUp.d.ts
declare const ArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpCircle.d.ts
declare const ArrowUpCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpLeft.d.ts
declare const ArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpRight.d.ts
declare const ArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AtSign.d.ts
declare const AtSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Award.d.ts
declare const Award: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BarChart.d.ts
declare const BarChart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BarChart2.d.ts
declare const BarChart2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Battery.d.ts
declare const Battery: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryCharging.d.ts
declare const BatteryCharging: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bell.d.ts
declare const Bell: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellOff.d.ts
declare const BellOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bluetooth.d.ts
declare const Bluetooth: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bold.d.ts
declare const Bold: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Book.d.ts
declare const Book: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookOpen.d.ts
declare const BookOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bookmark.d.ts
declare const Bookmark: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Box.d.ts
declare const Box: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Briefcase.d.ts
declare const Briefcase: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Calendar.d.ts
declare const Calendar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Camera.d.ts
declare const Camera: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CameraOff.d.ts
declare const CameraOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cast.d.ts
declare const Cast: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Check.d.ts
declare const Check: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CheckCircle.d.ts
declare const CheckCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CheckSquare.d.ts
declare const CheckSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronDown.d.ts
declare const ChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronLeft.d.ts
declare const ChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronRight.d.ts
declare const ChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronUp.d.ts
declare const ChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsDown.d.ts
declare const ChevronsDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsLeft.d.ts
declare const ChevronsLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsRight.d.ts
declare const ChevronsRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsUp.d.ts
declare const ChevronsUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Chrome.d.ts
declare const Chrome: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Circle.d.ts
declare const Circle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clipboard.d.ts
declare const Clipboard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock.d.ts
declare const Clock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cloud.d.ts
declare const Cloud: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudDrizzle.d.ts
declare const CloudDrizzle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudLightning.d.ts
declare const CloudLightning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudOff.d.ts
declare const CloudOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudRain.d.ts
declare const CloudRain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudSnow.d.ts
declare const CloudSnow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Code.d.ts
declare const Code: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Codepen.d.ts
declare const Codepen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Codesandbox.d.ts
declare const Codesandbox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Coffee.d.ts
declare const Coffee: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Columns.d.ts
declare const Columns: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Command.d.ts
declare const Command: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Compass.d.ts
declare const Compass: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Copy.d.ts
declare const Copy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerDownLeft.d.ts
declare const CornerDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerDownRight.d.ts
declare const CornerDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerLeftDown.d.ts
declare const CornerLeftDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerLeftUp.d.ts
declare const CornerLeftUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerRightDown.d.ts
declare const CornerRightDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerRightUp.d.ts
declare const CornerRightUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerUpLeft.d.ts
declare const CornerUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerUpRight.d.ts
declare const CornerUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cpu.d.ts
declare const Cpu: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CreditCard.d.ts
declare const CreditCard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Crop.d.ts
declare const Crop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Crosshair.d.ts
declare const Crosshair: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Database.d.ts
declare const Database: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Delete.d.ts
declare const Delete: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Disc.d.ts
declare const Disc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Divide.d.ts
declare const Divide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DivideCircle.d.ts
declare const DivideCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DivideSquare.d.ts
declare const DivideSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DollarSign.d.ts
declare const DollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Download.d.ts
declare const Download: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DownloadCloud.d.ts
declare const DownloadCloud: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dribbble.d.ts
declare const Dribbble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Droplet.d.ts
declare const Droplet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Edit.d.ts
declare const Edit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Edit2.d.ts
declare const Edit2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Edit3.d.ts
declare const Edit3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ExternalLink.d.ts
declare const ExternalLink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Eye.d.ts
declare const Eye: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EyeOff.d.ts
declare const EyeOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Facebook.d.ts
declare const Facebook: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FastForward.d.ts
declare const FastForward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Feather.d.ts
declare const Feather: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Figma.d.ts
declare const Figma: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/File.d.ts
declare const File: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileMinus.d.ts
declare const FileMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilePlus.d.ts
declare const FilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileText.d.ts
declare const FileText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Film.d.ts
declare const Film: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Filter.d.ts
declare const Filter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flag.d.ts
declare const Flag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Folder.d.ts
declare const Folder: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderMinus.d.ts
declare const FolderMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderPlus.d.ts
declare const FolderPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Framer.d.ts
declare const Framer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Frown.d.ts
declare const Frown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gift.d.ts
declare const Gift: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitBranch.d.ts
declare const GitBranch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitCommit.d.ts
declare const GitCommit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitMerge.d.ts
declare const GitMerge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequest.d.ts
declare const GitPullRequest: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Github.d.ts
declare const Github: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gitlab.d.ts
declare const Gitlab: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Globe.d.ts
declare const Globe: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid.d.ts
declare const Grid: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HardDrive.d.ts
declare const HardDrive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hash.d.ts
declare const Hash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Headphones.d.ts
declare const Headphones: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heart.d.ts
declare const Heart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HelpCircle.d.ts
declare const HelpCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hexagon.d.ts
declare const Hexagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Home.d.ts
declare const Home: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Image.d.ts
declare const Image: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Inbox.d.ts
declare const Inbox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Info.d.ts
declare const Info: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Instagram.d.ts
declare const Instagram: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Italic.d.ts
declare const Italic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Key.d.ts
declare const Key: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Layers.d.ts
declare const Layers: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Layout.d.ts
declare const Layout: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LifeBuoy.d.ts
declare const LifeBuoy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Link.d.ts
declare const Link: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Link2.d.ts
declare const Link2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Linkedin.d.ts
declare const Linkedin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/List.d.ts
declare const List: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Loader.d.ts
declare const Loader: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lock.d.ts
declare const Lock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LogIn.d.ts
declare const LogIn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LogOut.d.ts
declare const LogOut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mail.d.ts
declare const Mail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Map.d.ts
declare const Map: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPin.d.ts
declare const MapPin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Maximize.d.ts
declare const Maximize: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Maximize2.d.ts
declare const Maximize2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Meh.d.ts
declare const Meh: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Menu.d.ts
declare const Menu: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircle.d.ts
declare const MessageCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquare.d.ts
declare const MessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mic.d.ts
declare const Mic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MicOff.d.ts
declare const MicOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minimize.d.ts
declare const Minimize: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minimize2.d.ts
declare const Minimize2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minus.d.ts
declare const Minus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MinusCircle.d.ts
declare const MinusCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MinusSquare.d.ts
declare const MinusSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Monitor.d.ts
declare const Monitor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Moon.d.ts
declare const Moon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoreHorizontal.d.ts
declare const MoreHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoreVertical.d.ts
declare const MoreVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MousePointer.d.ts
declare const MousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Move.d.ts
declare const Move: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Music.d.ts
declare const Music: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Navigation.d.ts
declare const Navigation: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Navigation2.d.ts
declare const Navigation2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Octagon.d.ts
declare const Octagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Package.d.ts
declare const Package: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Paperclip.d.ts
declare const Paperclip: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pause.d.ts
declare const Pause: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PauseCircle.d.ts
declare const PauseCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PenTool.d.ts
declare const PenTool: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Percent.d.ts
declare const Percent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Phone.d.ts
declare const Phone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneCall.d.ts
declare const PhoneCall: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneForwarded.d.ts
declare const PhoneForwarded: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneIncoming.d.ts
declare const PhoneIncoming: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneMissed.d.ts
declare const PhoneMissed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneOff.d.ts
declare const PhoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneOutgoing.d.ts
declare const PhoneOutgoing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PieChart.d.ts
declare const PieChart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Play.d.ts
declare const Play: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlayCircle.d.ts
declare const PlayCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Plus.d.ts
declare const Plus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlusCircle.d.ts
declare const PlusCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlusSquare.d.ts
declare const PlusSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pocket.d.ts
declare const Pocket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Power.d.ts
declare const Power: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Printer.d.ts
declare const Printer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radio.d.ts
declare const Radio: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCcw.d.ts
declare const RefreshCcw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCw.d.ts
declare const RefreshCw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Repeat.d.ts
declare const Repeat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rewind.d.ts
declare const Rewind: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCcw.d.ts
declare const RotateCcw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCw.d.ts
declare const RotateCw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rss.d.ts
declare const Rss: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Save.d.ts
declare const Save: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scissors.d.ts
declare const Scissors: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Search.d.ts
declare const Search: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Send.d.ts
declare const Send: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Server.d.ts
declare const Server: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Settings.d.ts
declare const Settings: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Share.d.ts
declare const Share: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Share2.d.ts
declare const Share2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shield.d.ts
declare const Shield: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldOff.d.ts
declare const ShieldOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShoppingBag.d.ts
declare const ShoppingBag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShoppingCart.d.ts
declare const ShoppingCart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shuffle.d.ts
declare const Shuffle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sidebar.d.ts
declare const Sidebar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SkipBack.d.ts
declare const SkipBack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SkipForward.d.ts
declare const SkipForward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Slack.d.ts
declare const Slack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Slash.d.ts
declare const Slash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sliders.d.ts
declare const Sliders: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Smartphone.d.ts
declare const Smartphone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Smile.d.ts
declare const Smile: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Speaker.d.ts
declare const Speaker: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Square.d.ts
declare const Square: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Star.d.ts
declare const Star: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StopCircle.d.ts
declare const StopCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sun.d.ts
declare const Sun: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sunrise.d.ts
declare const Sunrise: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sunset.d.ts
declare const Sunset: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Table.d.ts
declare const Table: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tablet.d.ts
declare const Tablet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tag.d.ts
declare const Tag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Target.d.ts
declare const Target: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Terminal.d.ts
declare const Terminal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Thermometer.d.ts
declare const Thermometer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThumbsDown.d.ts
declare const ThumbsDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThumbsUp.d.ts
declare const ThumbsUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ToggleLeft.d.ts
declare const ToggleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ToggleRight.d.ts
declare const ToggleRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tool.d.ts
declare const Tool: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trash.d.ts
declare const Trash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trash2.d.ts
declare const Trash2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trello.d.ts
declare const Trello: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrendingDown.d.ts
declare const TrendingDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrendingUp.d.ts
declare const TrendingUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Triangle.d.ts
declare const Triangle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Truck.d.ts
declare const Truck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tv.d.ts
declare const Tv: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Twitch.d.ts
declare const Twitch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Twitter.d.ts
declare const Twitter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Type.d.ts
declare const Type: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Umbrella.d.ts
declare const Umbrella: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Underline.d.ts
declare const Underline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Unlock.d.ts
declare const Unlock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Upload.d.ts
declare const Upload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UploadCloud.d.ts
declare const UploadCloud: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/User.d.ts
declare const User: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserCheck.d.ts
declare const UserCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserMinus.d.ts
declare const UserMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserPlus.d.ts
declare const UserPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserX.d.ts
declare const UserX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Users.d.ts
declare const Users: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Video.d.ts
declare const Video: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VideoOff.d.ts
declare const VideoOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Voicemail.d.ts
declare const Voicemail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume.d.ts
declare const Volume: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume1.d.ts
declare const Volume1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume2.d.ts
declare const Volume2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VolumeX.d.ts
declare const VolumeX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Watch.d.ts
declare const Watch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wifi.d.ts
declare const Wifi: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WifiOff.d.ts
declare const WifiOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wind.d.ts
declare const Wind: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/X.d.ts
declare const X: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/XCircle.d.ts
declare const XCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/XOctagon.d.ts
declare const XOctagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/XSquare.d.ts
declare const XSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Youtube.d.ts
declare const Youtube: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Zap.d.ts
declare const Zap: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZapOff.d.ts
declare const ZapOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZoomIn.d.ts
declare const ZoomIn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZoomOut.d.ts
declare const ZoomOut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
export { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart, BarChart2, Battery, BatteryCharging, Bell, BellOff, Bluetooth, Bold, Book, BookOpen, Bookmark, Box, Briefcase, Calendar, Camera, CameraOff, Cast, Check, CheckCircle, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, Cloud, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, Divide, DivideCircle, DivideSquare, DollarSign, Download, DownloadCloud, Dribbble, Droplet, Edit, Edit2, Edit3, ExternalLink, Eye, EyeOff, Facebook, FastForward, Feather, Figma, File, FileMinus, FilePlus, FileText, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, Github, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, Map, MapPin, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, Minus, MinusCircle, MinusSquare, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, Pause, PauseCircle, PenTool, Percent, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Table, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, X, XCircle, XOctagon, XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };
//# sourceMappingURL=index.d.ts.map