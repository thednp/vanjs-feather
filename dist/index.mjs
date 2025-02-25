var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/icons/Activity.ts
import van2 from "vanjs-core";

// src/FeatherIcon.ts
import van from "vanjs-core";
var svgNamespace = "http://www.w3.org/2000/svg";
var FeatherIcon = /* @__PURE__ */ __name((props = {}, ...children) => {
  const { svg } = van.tags(svgNamespace);
  const defaultProps = {
    xmlns: svgNamespace,
    viewBox: "0 0 24 24",
    fill: "none",
    width: 24,
    height: 24,
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  return svg(
    {
      ...defaultProps,
      ...props
    },
    children
  );
}, "FeatherIcon");

// src/icons/Activity.ts
var Activity = /* @__PURE__ */ __name((props) => {
  const { polyline } = van2.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })
  );
}, "Activity");

// src/icons/Airplay.ts
import van3 from "vanjs-core";
var Airplay = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = van3.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
    }),
    polygon({
      points: "12 15 17 21 7 21 12 15"
    })
  );
}, "Airplay");

// src/icons/AlertCircle.ts
import van4 from "vanjs-core";
var AlertCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van4.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })
  );
}, "AlertCircle");

// src/icons/AlertOctagon.ts
import van5 from "vanjs-core";
var AlertOctagon = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van5.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })
  );
}, "AlertOctagon");

// src/icons/AlertTriangle.ts
import van6 from "vanjs-core";
var AlertTriangle = /* @__PURE__ */ __name((props) => {
  const { path, line } = van6.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })
  );
}, "AlertTriangle");

// src/icons/AlignCenter.ts
import van7 from "vanjs-core";
var AlignCenter = /* @__PURE__ */ __name((props) => {
  const { line } = van7.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "10",
      x2: "6",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "18",
      y1: "18",
      x2: "6",
      y2: "18"
    })
  );
}, "AlignCenter");

// src/icons/AlignJustify.ts
import van8 from "vanjs-core";
var AlignJustify = /* @__PURE__ */ __name((props) => {
  const { line } = van8.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "21",
      y1: "10",
      x2: "3",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "3",
      y2: "18"
    })
  );
}, "AlignJustify");

// src/icons/AlignLeft.ts
import van9 from "vanjs-core";
var AlignLeft = /* @__PURE__ */ __name((props) => {
  const { line } = van9.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "10",
      x2: "3",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "17",
      y1: "18",
      x2: "3",
      y2: "18"
    })
  );
}, "AlignLeft");

// src/icons/AlignRight.ts
import van10 from "vanjs-core";
var AlignRight = /* @__PURE__ */ __name((props) => {
  const { line } = van10.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "21",
      y1: "10",
      x2: "7",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "7",
      y2: "18"
    })
  );
}, "AlignRight");

// src/icons/Anchor.ts
import van11 from "vanjs-core";
var Anchor = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van11.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "5",
      r: "3"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "8"
    }),
    path({
      d: "M5 12H2a10 10 0 0 0 20 0h-3"
    })
  );
}, "Anchor");

// src/icons/Aperture.ts
import van12 from "vanjs-core";
var Aperture = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van12.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "14.31",
      y1: "8",
      x2: "20.05",
      y2: "17.94"
    }),
    line({
      x1: "9.69",
      y1: "8",
      x2: "21.17",
      y2: "8"
    }),
    line({
      x1: "7.38",
      y1: "12",
      x2: "13.12",
      y2: "2.06"
    }),
    line({
      x1: "9.69",
      y1: "16",
      x2: "3.95",
      y2: "6.06"
    }),
    line({
      x1: "14.31",
      y1: "16",
      x2: "2.83",
      y2: "16"
    }),
    line({
      x1: "16.62",
      y1: "12",
      x2: "10.88",
      y2: "21.94"
    })
  );
}, "Aperture");

// src/icons/Archive.ts
import van13 from "vanjs-core";
var Archive = /* @__PURE__ */ __name((props) => {
  const { polyline, line, rect } = van13.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "21 8 21 21 3 21 3 8"
    }),
    rect({
      x: "1",
      y: "3",
      width: "22",
      height: "5"
    }),
    line({
      x1: "10",
      y1: "12",
      x2: "14",
      y2: "12"
    })
  );
}, "Archive");

// src/icons/ArrowDown.ts
import van14 from "vanjs-core";
var ArrowDown = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van14.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }),
    polyline({
      points: "19 12 12 19 5 12"
    })
  );
}, "ArrowDown");

// src/icons/ArrowDownCircle.ts
import van15 from "vanjs-core";
var ArrowDownCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = van15.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "8 12 12 16 16 12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    })
  );
}, "ArrowDownCircle");

// src/icons/ArrowDownLeft.ts
import van16 from "vanjs-core";
var ArrowDownLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van16.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17"
    }),
    polyline({
      points: "17 17 7 17 7 7"
    })
  );
}, "ArrowDownLeft");

// src/icons/ArrowDownRight.ts
import van17 from "vanjs-core";
var ArrowDownRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van17.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "7",
      x2: "17",
      y2: "17"
    }),
    polyline({
      points: "17 7 17 17 7 17"
    })
  );
}, "ArrowDownRight");

// src/icons/ArrowLeft.ts
import van18 from "vanjs-core";
var ArrowLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van18.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }),
    polyline({
      points: "12 19 5 12 12 5"
    })
  );
}, "ArrowLeft");

// src/icons/ArrowLeftCircle.ts
import van19 from "vanjs-core";
var ArrowLeftCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = van19.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 8 8 12 12 16"
    }),
    line({
      x1: "16",
      y1: "12",
      x2: "8",
      y2: "12"
    })
  );
}, "ArrowLeftCircle");

// src/icons/ArrowRight.ts
import van20 from "vanjs-core";
var ArrowRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van20.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    polyline({
      points: "12 5 19 12 12 19"
    })
  );
}, "ArrowRight");

// src/icons/ArrowRightCircle.ts
import van21 from "vanjs-core";
var ArrowRightCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = van21.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 16 16 12 12 8"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "ArrowRightCircle");

// src/icons/ArrowUp.ts
import van22 from "vanjs-core";
var ArrowUp = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van22.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "5"
    }),
    polyline({
      points: "5 12 12 5 19 12"
    })
  );
}, "ArrowUp");

// src/icons/ArrowUpCircle.ts
import van23 from "vanjs-core";
var ArrowUpCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = van23.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "16 12 12 8 8 12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "8"
    })
  );
}, "ArrowUpCircle");

// src/icons/ArrowUpLeft.ts
import van24 from "vanjs-core";
var ArrowUpLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van24.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "17",
      x2: "7",
      y2: "7"
    }),
    polyline({
      points: "7 17 7 7 17 7"
    })
  );
}, "ArrowUpLeft");

// src/icons/ArrowUpRight.ts
import van25 from "vanjs-core";
var ArrowUpRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van25.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7"
    }),
    polyline({
      points: "7 7 17 7 17 17"
    })
  );
}, "ArrowUpRight");

// src/icons/AtSign.ts
import van26 from "vanjs-core";
var AtSign = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van26.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    path({
      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
    })
  );
}, "AtSign");

// src/icons/Award.ts
import van27 from "vanjs-core";
var Award = /* @__PURE__ */ __name((props) => {
  const { polyline, circle } = van27.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "8",
      r: "7"
    }),
    polyline({
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
    })
  );
}, "Award");

// src/icons/BarChart.ts
import van28 from "vanjs-core";
var BarChart = /* @__PURE__ */ __name((props) => {
  const { line } = van28.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10"
    }),
    line({
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4"
    }),
    line({
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16"
    })
  );
}, "BarChart");

// src/icons/BarChart2.ts
import van29 from "vanjs-core";
var BarChart2 = /* @__PURE__ */ __name((props) => {
  const { line } = van29.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4"
    }),
    line({
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14"
    })
  );
}, "BarChart2");

// src/icons/Battery.ts
import van30 from "vanjs-core";
var Battery = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van30.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "6",
      width: "18",
      height: "12",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11"
    })
  );
}, "Battery");

// src/icons/BatteryCharging.ts
import van31 from "vanjs-core";
var BatteryCharging = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van31.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11"
    }),
    polyline({
      points: "11 6 7 12 13 12 9 18"
    })
  );
}, "BatteryCharging");

// src/icons/Bell.ts
import van32 from "vanjs-core";
var Bell = /* @__PURE__ */ __name((props) => {
  const { path } = van32.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
    }),
    path({
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    })
  );
}, "Bell");

// src/icons/BellOff.ts
import van33 from "vanjs-core";
var BellOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van33.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    }),
    path({
      d: "M18.63 13A17.89 17.89 0 0 1 18 8"
    }),
    path({
      d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
    }),
    path({
      d: "M18 8a6 6 0 0 0-9.33-5"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "BellOff");

// src/icons/Bluetooth.ts
import van34 from "vanjs-core";
var Bluetooth = /* @__PURE__ */ __name((props) => {
  const { polyline } = van34.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
    })
  );
}, "Bluetooth");

// src/icons/Bold.ts
import van35 from "vanjs-core";
var Bold = /* @__PURE__ */ __name((props) => {
  const { path } = van35.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
    }),
    path({
      d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
    })
  );
}, "Bold");

// src/icons/Book.ts
import van36 from "vanjs-core";
var Book = /* @__PURE__ */ __name((props) => {
  const { path } = van36.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }),
    path({
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })
  );
}, "Book");

// src/icons/BookOpen.ts
import van37 from "vanjs-core";
var BookOpen = /* @__PURE__ */ __name((props) => {
  const { path } = van37.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    }),
    path({
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    })
  );
}, "BookOpen");

// src/icons/Bookmark.ts
import van38 from "vanjs-core";
var Bookmark = /* @__PURE__ */ __name((props) => {
  const { path } = van38.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    })
  );
}, "Bookmark");

// src/icons/Box.ts
import van39 from "vanjs-core";
var Box = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van39.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Box");

// src/icons/Briefcase.ts
import van40 from "vanjs-core";
var Briefcase = /* @__PURE__ */ __name((props) => {
  const { path, rect } = van40.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    })
  );
}, "Briefcase");

// src/icons/Calendar.ts
import van41 from "vanjs-core";
var Calendar = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van41.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })
  );
}, "Calendar");

// src/icons/Camera.ts
import van42 from "vanjs-core";
var Camera = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van42.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
    }),
    circle({
      cx: "12",
      cy: "13",
      r: "4"
    })
  );
}, "Camera");

// src/icons/CameraOff.ts
import van43 from "vanjs-core";
var CameraOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van43.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
    })
  );
}, "CameraOff");

// src/icons/Cast.ts
import van44 from "vanjs-core";
var Cast = /* @__PURE__ */ __name((props) => {
  const { path, line } = van44.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
    }),
    line({
      x1: "2",
      y1: "20",
      x2: "2.01",
      y2: "20"
    })
  );
}, "Cast");

// src/icons/Check.ts
import van45 from "vanjs-core";
var Check = /* @__PURE__ */ __name((props) => {
  const { polyline } = van45.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "20 6 9 17 4 12"
    })
  );
}, "Check");

// src/icons/CheckCircle.ts
import van46 from "vanjs-core";
var CheckCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van46.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }),
    polyline({
      points: "22 4 12 14.01 9 11.01"
    })
  );
}, "CheckCircle");

// src/icons/CheckSquare.ts
import van47 from "vanjs-core";
var CheckSquare = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van47.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 11 12 14 22 4"
    }),
    path({
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    })
  );
}, "CheckSquare");

// src/icons/ChevronDown.ts
import van48 from "vanjs-core";
var ChevronDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = van48.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 12 15 18 9"
    })
  );
}, "ChevronDown");

// src/icons/ChevronLeft.ts
import van49 from "vanjs-core";
var ChevronLeft = /* @__PURE__ */ __name((props) => {
  const { polyline } = van49.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 18 9 12 15 6"
    })
  );
}, "ChevronLeft");

// src/icons/ChevronRight.ts
import van50 from "vanjs-core";
var ChevronRight = /* @__PURE__ */ __name((props) => {
  const { polyline } = van50.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 18 15 12 9 6"
    })
  );
}, "ChevronRight");

// src/icons/ChevronUp.ts
import van51 from "vanjs-core";
var ChevronUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = van51.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "18 15 12 9 6 15"
    })
  );
}, "ChevronUp");

// src/icons/ChevronsDown.ts
import van52 from "vanjs-core";
var ChevronsDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = van52.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "7 13 12 18 17 13"
    }),
    polyline({
      points: "7 6 12 11 17 6"
    })
  );
}, "ChevronsDown");

// src/icons/ChevronsLeft.ts
import van53 from "vanjs-core";
var ChevronsLeft = /* @__PURE__ */ __name((props) => {
  const { polyline } = van53.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "11 17 6 12 11 7"
    }),
    polyline({
      points: "18 17 13 12 18 7"
    })
  );
}, "ChevronsLeft");

// src/icons/ChevronsRight.ts
import van54 from "vanjs-core";
var ChevronsRight = /* @__PURE__ */ __name((props) => {
  const { polyline } = van54.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "13 17 18 12 13 7"
    }),
    polyline({
      points: "6 17 11 12 6 7"
    })
  );
}, "ChevronsRight");

// src/icons/ChevronsUp.ts
import van55 from "vanjs-core";
var ChevronsUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = van55.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "17 11 12 6 7 11"
    }),
    polyline({
      points: "17 18 12 13 7 18"
    })
  );
}, "ChevronsUp");

// src/icons/Chrome.ts
import van56 from "vanjs-core";
var Chrome = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van56.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "21.17",
      y1: "8",
      x2: "12",
      y2: "8"
    }),
    line({
      x1: "3.95",
      y1: "6.06",
      x2: "8.54",
      y2: "14"
    }),
    line({
      x1: "10.88",
      y1: "21.94",
      x2: "15.46",
      y2: "14"
    })
  );
}, "Chrome");

// src/icons/Circle.ts
import van57 from "vanjs-core";
var Circle = /* @__PURE__ */ __name((props) => {
  const { circle } = van57.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    })
  );
}, "Circle");

// src/icons/Clipboard.ts
import van58 from "vanjs-core";
var Clipboard = /* @__PURE__ */ __name((props) => {
  const { path, rect } = van58.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    rect({
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      ry: "1"
    })
  );
}, "Clipboard");

// src/icons/Clock.ts
import van59 from "vanjs-core";
var Clock = /* @__PURE__ */ __name((props) => {
  const { polyline, circle } = van59.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 6 12 12 16 14"
    })
  );
}, "Clock");

// src/icons/Cloud.ts
import van60 from "vanjs-core";
var Cloud = /* @__PURE__ */ __name((props) => {
  const { path } = van60.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    })
  );
}, "Cloud");

// src/icons/CloudDrizzle.ts
import van61 from "vanjs-core";
var CloudDrizzle = /* @__PURE__ */ __name((props) => {
  const { path, line } = van61.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "19",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "15"
    }),
    line({
      x1: "16",
      y1: "19",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "15"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "17"
    }),
    path({
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
    })
  );
}, "CloudDrizzle");

// src/icons/CloudLightning.ts
import van62 from "vanjs-core";
var CloudLightning = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van62.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
    }),
    polyline({
      points: "13 11 9 17 15 17 11 23"
    })
  );
}, "CloudLightning");

// src/icons/CloudOff.ts
import van63 from "vanjs-core";
var CloudOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van63.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "CloudOff");

// src/icons/CloudRain.ts
import van64 from "vanjs-core";
var CloudRain = /* @__PURE__ */ __name((props) => {
  const { path, line } = van64.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "23"
    }),
    path({
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
    })
  );
}, "CloudRain");

// src/icons/CloudSnow.ts
import van65 from "vanjs-core";
var CloudSnow = /* @__PURE__ */ __name((props) => {
  const { path, line } = van65.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
    }),
    line({
      x1: "8",
      y1: "16",
      x2: "8.01",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "20",
      x2: "8.01",
      y2: "20"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12.01",
      y2: "22"
    }),
    line({
      x1: "16",
      y1: "16",
      x2: "16.01",
      y2: "16"
    }),
    line({
      x1: "16",
      y1: "20",
      x2: "16.01",
      y2: "20"
    })
  );
}, "CloudSnow");

// src/icons/Code.ts
import van66 from "vanjs-core";
var Code = /* @__PURE__ */ __name((props) => {
  const { polyline } = van66.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 18 22 12 16 6"
    }),
    polyline({
      points: "8 6 2 12 8 18"
    })
  );
}, "Code");

// src/icons/Codepen.ts
import van67 from "vanjs-core";
var Codepen = /* @__PURE__ */ __name((props) => {
  const { polyline, polygon, line } = van67.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "15.5"
    }),
    polyline({
      points: "22 8.5 12 15.5 2 8.5"
    }),
    polyline({
      points: "2 15.5 12 8.5 22 15.5"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "8.5"
    })
  );
}, "Codepen");

// src/icons/Codesandbox.ts
import van68 from "vanjs-core";
var Codesandbox = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van68.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "7.5 4.21 12 6.81 16.5 4.21"
    }),
    polyline({
      points: "7.5 19.79 7.5 14.6 3 12"
    }),
    polyline({
      points: "21 12 16.5 14.6 16.5 19.79"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Codesandbox");

// src/icons/Coffee.ts
import van69 from "vanjs-core";
var Coffee = /* @__PURE__ */ __name((props) => {
  const { path, line } = van69.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 8h1a4 4 0 0 1 0 8h-1"
    }),
    path({
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
    }),
    line({
      x1: "6",
      y1: "1",
      x2: "6",
      y2: "4"
    }),
    line({
      x1: "10",
      y1: "1",
      x2: "10",
      y2: "4"
    }),
    line({
      x1: "14",
      y1: "1",
      x2: "14",
      y2: "4"
    })
  );
}, "Coffee");

// src/icons/Columns.ts
import van70 from "vanjs-core";
var Columns = /* @__PURE__ */ __name((props) => {
  const { path } = van70.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
    })
  );
}, "Columns");

// src/icons/Command.ts
import van71 from "vanjs-core";
var Command = /* @__PURE__ */ __name((props) => {
  const { path } = van71.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
    })
  );
}, "Command");

// src/icons/Compass.ts
import van72 from "vanjs-core";
var Compass = /* @__PURE__ */ __name((props) => {
  const { polygon, circle } = van72.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polygon({
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })
  );
}, "Compass");

// src/icons/Copy.ts
import van73 from "vanjs-core";
var Copy = /* @__PURE__ */ __name((props) => {
  const { path, rect } = van73.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })
  );
}, "Copy");

// src/icons/CornerDownLeft.ts
import van74 from "vanjs-core";
var CornerDownLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van74.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 10 4 15 9 20"
    }),
    path({
      d: "M20 4v7a4 4 0 0 1-4 4H4"
    })
  );
}, "CornerDownLeft");

// src/icons/CornerDownRight.ts
import van75 from "vanjs-core";
var CornerDownRight = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van75.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 10 20 15 15 20"
    }),
    path({
      d: "M4 4v7a4 4 0 0 0 4 4h12"
    })
  );
}, "CornerDownRight");

// src/icons/CornerLeftDown.ts
import van76 from "vanjs-core";
var CornerLeftDown = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van76.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "14 15 9 20 4 15"
    }),
    path({
      d: "M20 4h-7a4 4 0 0 0-4 4v12"
    })
  );
}, "CornerLeftDown");

// src/icons/CornerLeftUp.ts
import van77 from "vanjs-core";
var CornerLeftUp = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van77.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "14 9 9 4 4 9"
    }),
    path({
      d: "M20 20h-7a4 4 0 0 1-4-4V4"
    })
  );
}, "CornerLeftUp");

// src/icons/CornerRightDown.ts
import van78 from "vanjs-core";
var CornerRightDown = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van78.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 15 15 20 20 15"
    }),
    path({
      d: "M4 4h7a4 4 0 0 1 4 4v12"
    })
  );
}, "CornerRightDown");

// src/icons/CornerRightUp.ts
import van79 from "vanjs-core";
var CornerRightUp = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van79.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 9 15 4 20 9"
    }),
    path({
      d: "M4 20h7a4 4 0 0 0 4-4V4"
    })
  );
}, "CornerRightUp");

// src/icons/CornerUpLeft.ts
import van80 from "vanjs-core";
var CornerUpLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van80.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 14 4 9 9 4"
    }),
    path({
      d: "M20 20v-7a4 4 0 0 0-4-4H4"
    })
  );
}, "CornerUpLeft");

// src/icons/CornerUpRight.ts
import van81 from "vanjs-core";
var CornerUpRight = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van81.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 14 20 9 15 4"
    }),
    path({
      d: "M4 20v-7a4 4 0 0 1 4-4h12"
    })
  );
}, "CornerUpRight");

// src/icons/Cpu.ts
import van82 from "vanjs-core";
var Cpu = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van82.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    }),
    line({
      x1: "9",
      y1: "1",
      x2: "9",
      y2: "4"
    }),
    line({
      x1: "15",
      y1: "1",
      x2: "15",
      y2: "4"
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "9",
      y2: "23"
    }),
    line({
      x1: "15",
      y1: "20",
      x2: "15",
      y2: "23"
    }),
    line({
      x1: "20",
      y1: "9",
      x2: "23",
      y2: "9"
    }),
    line({
      x1: "20",
      y1: "14",
      x2: "23",
      y2: "14"
    }),
    line({
      x1: "1",
      y1: "9",
      x2: "4",
      y2: "9"
    }),
    line({
      x1: "1",
      y1: "14",
      x2: "4",
      y2: "14"
    })
  );
}, "Cpu");

// src/icons/CreditCard.ts
import van83 from "vanjs-core";
var CreditCard = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van83.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10"
    })
  );
}, "CreditCard");

// src/icons/Crop.ts
import van84 from "vanjs-core";
var Crop = /* @__PURE__ */ __name((props) => {
  const { path } = van84.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
    }),
    path({
      d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
    })
  );
}, "Crop");

// src/icons/Crosshair.ts
import van85 from "vanjs-core";
var Crosshair = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van85.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "22",
      y1: "12",
      x2: "18",
      y2: "12"
    }),
    line({
      x1: "6",
      y1: "12",
      x2: "2",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12",
      y2: "2"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "18"
    })
  );
}, "Crosshair");

// src/icons/Database.ts
import van86 from "vanjs-core";
var Database = /* @__PURE__ */ __name((props) => {
  const { path, ellipse } = van86.tags(svgNamespace);
  return FeatherIcon(
    props,
    ellipse({
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3"
    }),
    path({
      d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
    }),
    path({
      d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
    })
  );
}, "Database");

// src/icons/Delete.ts
import van87 from "vanjs-core";
var Delete = /* @__PURE__ */ __name((props) => {
  const { path, line } = van87.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
    }),
    line({
      x1: "18",
      y1: "9",
      x2: "12",
      y2: "15"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "18",
      y2: "15"
    })
  );
}, "Delete");

// src/icons/Disc.ts
import van88 from "vanjs-core";
var Disc = /* @__PURE__ */ __name((props) => {
  const { circle } = van88.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    })
  );
}, "Disc");

// src/icons/Divide.ts
import van89 from "vanjs-core";
var Divide = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van89.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "6",
      r: "2"
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    circle({
      cx: "12",
      cy: "18",
      r: "2"
    })
  );
}, "Divide");

// src/icons/DivideCircle.ts
import van90 from "vanjs-core";
var DivideCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van90.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    })
  );
}, "DivideCircle");

// src/icons/DivideSquare.ts
import van91 from "vanjs-core";
var DivideSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van91.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8"
    })
  );
}, "DivideSquare");

// src/icons/DollarSign.ts
import van92 from "vanjs-core";
var DollarSign = /* @__PURE__ */ __name((props) => {
  const { path, line } = van92.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "23"
    }),
    path({
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    })
  );
}, "DollarSign");

// src/icons/Download.ts
import van93 from "vanjs-core";
var Download = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van93.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    polyline({
      points: "7 10 12 15 17 10"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })
  );
}, "Download");

// src/icons/DownloadCloud.ts
import van94 from "vanjs-core";
var DownloadCloud = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van94.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "8 17 12 21 16 17"
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }),
    path({
      d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
    })
  );
}, "DownloadCloud");

// src/icons/Dribbble.ts
import van95 from "vanjs-core";
var Dribbble = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van95.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
    })
  );
}, "Dribbble");

// src/icons/Droplet.ts
import van96 from "vanjs-core";
var Droplet = /* @__PURE__ */ __name((props) => {
  const { path } = van96.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
    })
  );
}, "Droplet");

// src/icons/Edit.ts
import van97 from "vanjs-core";
var Edit = /* @__PURE__ */ __name((props) => {
  const { path } = van97.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }),
    path({
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })
  );
}, "Edit");

// src/icons/Edit2.ts
import van98 from "vanjs-core";
var Edit2 = /* @__PURE__ */ __name((props) => {
  const { path } = van98.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    })
  );
}, "Edit2");

// src/icons/Edit3.ts
import van99 from "vanjs-core";
var Edit3 = /* @__PURE__ */ __name((props) => {
  const { path } = van99.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 20h9"
    }),
    path({
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    })
  );
}, "Edit3");

// src/icons/ExternalLink.ts
import van100 from "vanjs-core";
var ExternalLink = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van100.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }),
    polyline({
      points: "15 3 21 3 21 9"
    }),
    line({
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })
  );
}, "ExternalLink");

// src/icons/Eye.ts
import van101 from "vanjs-core";
var Eye = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van101.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    })
  );
}, "Eye");

// src/icons/EyeOff.ts
import van102 from "vanjs-core";
var EyeOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van102.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "EyeOff");

// src/icons/Facebook.ts
import van103 from "vanjs-core";
var Facebook = /* @__PURE__ */ __name((props) => {
  const { path } = van103.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })
  );
}, "Facebook");

// src/icons/FastForward.ts
import van104 from "vanjs-core";
var FastForward = /* @__PURE__ */ __name((props) => {
  const { polygon } = van104.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "13 19 22 12 13 5 13 19"
    }),
    polygon({
      points: "2 19 11 12 2 5 2 19"
    })
  );
}, "FastForward");

// src/icons/Feather.ts
import van105 from "vanjs-core";
var Feather = /* @__PURE__ */ __name((props) => {
  const { path, line } = van105.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
    }),
    line({
      x1: "16",
      y1: "8",
      x2: "2",
      y2: "22"
    }),
    line({
      x1: "17.5",
      y1: "15",
      x2: "9",
      y2: "15"
    })
  );
}, "Feather");

// src/icons/Figma.ts
import van106 from "vanjs-core";
var Figma = /* @__PURE__ */ __name((props) => {
  const { path } = van106.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
    }),
    path({
      d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
    }),
    path({
      d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
    }),
    path({
      d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
    }),
    path({
      d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
    })
  );
}, "Figma");

// src/icons/File.ts
import van107 from "vanjs-core";
var File = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van107.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
    }),
    polyline({
      points: "13 2 13 9 20 9"
    })
  );
}, "File");

// src/icons/FileMinus.ts
import van108 from "vanjs-core";
var FileMinus = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van108.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15"
    })
  );
}, "FileMinus");

// src/icons/FilePlus.ts
import van109 from "vanjs-core";
var FilePlus = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van109.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15"
    })
  );
}, "FilePlus");

// src/icons/FileText.ts
import van110 from "vanjs-core";
var FileText = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van110.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }),
    line({
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }),
    polyline({
      points: "10 9 9 9 8 9"
    })
  );
}, "FileText");

// src/icons/Film.ts
import van111 from "vanjs-core";
var Film = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van111.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2.18",
      ry: "2.18"
    }),
    line({
      x1: "7",
      y1: "2",
      x2: "7",
      y2: "22"
    }),
    line({
      x1: "17",
      y1: "2",
      x2: "17",
      y2: "22"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "2",
      y1: "7",
      x2: "7",
      y2: "7"
    }),
    line({
      x1: "2",
      y1: "17",
      x2: "7",
      y2: "17"
    }),
    line({
      x1: "17",
      y1: "17",
      x2: "22",
      y2: "17"
    }),
    line({
      x1: "17",
      y1: "7",
      x2: "22",
      y2: "7"
    })
  );
}, "Film");

// src/icons/Filter.ts
import van112 from "vanjs-core";
var Filter = /* @__PURE__ */ __name((props) => {
  const { polygon } = van112.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
    })
  );
}, "Filter");

// src/icons/Flag.ts
import van113 from "vanjs-core";
var Flag = /* @__PURE__ */ __name((props) => {
  const { path, line } = van113.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
    }),
    line({
      x1: "4",
      y1: "22",
      x2: "4",
      y2: "15"
    })
  );
}, "Flag");

// src/icons/Folder.ts
import van114 from "vanjs-core";
var Folder = /* @__PURE__ */ __name((props) => {
  const { path } = van114.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    })
  );
}, "Folder");

// src/icons/FolderMinus.ts
import van115 from "vanjs-core";
var FolderMinus = /* @__PURE__ */ __name((props) => {
  const { path, line } = van115.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14"
    })
  );
}, "FolderMinus");

// src/icons/FolderPlus.ts
import van116 from "vanjs-core";
var FolderPlus = /* @__PURE__ */ __name((props) => {
  const { path, line } = van116.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    }),
    line({
      x1: "12",
      y1: "11",
      x2: "12",
      y2: "17"
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14"
    })
  );
}, "FolderPlus");

// src/icons/Framer.ts
import van117 from "vanjs-core";
var Framer = /* @__PURE__ */ __name((props) => {
  const { path } = van117.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
    })
  );
}, "Framer");

// src/icons/Frown.ts
import van118 from "vanjs-core";
var Frown = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van118.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M16 16s-1.5-2-4-2-4 2-4 2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Frown");

// src/icons/Gift.ts
import van119 from "vanjs-core";
var Gift = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line, rect } = van119.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "20 12 20 22 4 22 4 12"
    }),
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "5"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "7"
    }),
    path({
      d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
    }),
    path({
      d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
    })
  );
}, "Gift");

// src/icons/GitBranch.ts
import van120 from "vanjs-core";
var GitBranch = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van120.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "6",
      y1: "3",
      x2: "6",
      y2: "15"
    }),
    circle({
      cx: "18",
      cy: "6",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    path({
      d: "M18 9a9 9 0 0 1-9 9"
    })
  );
}, "GitBranch");

// src/icons/GitCommit.ts
import van121 from "vanjs-core";
var GitCommit = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van121.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "1.05",
      y1: "12",
      x2: "7",
      y2: "12"
    }),
    line({
      x1: "17.01",
      y1: "12",
      x2: "22.96",
      y2: "12"
    })
  );
}, "GitCommit");

// src/icons/GitMerge.ts
import van122 from "vanjs-core";
var GitMerge = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van122.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    path({
      d: "M6 21V9a9 9 0 0 0 9 9"
    })
  );
}, "GitMerge");

// src/icons/GitPullRequest.ts
import van123 from "vanjs-core";
var GitPullRequest = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van123.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    path({
      d: "M13 6h3a2 2 0 0 1 2 2v7"
    }),
    line({
      x1: "6",
      y1: "9",
      x2: "6",
      y2: "21"
    })
  );
}, "GitPullRequest");

// src/icons/Github.ts
import van124 from "vanjs-core";
var Github = /* @__PURE__ */ __name((props) => {
  const { path } = van124.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    })
  );
}, "Github");

// src/icons/Gitlab.ts
import van125 from "vanjs-core";
var Gitlab = /* @__PURE__ */ __name((props) => {
  const { path } = van125.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
    })
  );
}, "Gitlab");

// src/icons/Globe.ts
import van126 from "vanjs-core";
var Globe = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van126.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    path({
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })
  );
}, "Globe");

// src/icons/Grid.ts
import van127 from "vanjs-core";
var Grid = /* @__PURE__ */ __name((props) => {
  const { rect } = van127.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }),
    rect({
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }),
    rect({
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    }),
    rect({
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    })
  );
}, "Grid");

// src/icons/HardDrive.ts
import van128 from "vanjs-core";
var HardDrive = /* @__PURE__ */ __name((props) => {
  const { path, line } = van128.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "12",
      x2: "2",
      y2: "12"
    }),
    path({
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    }),
    line({
      x1: "6",
      y1: "16",
      x2: "6.01",
      y2: "16"
    }),
    line({
      x1: "10",
      y1: "16",
      x2: "10.01",
      y2: "16"
    })
  );
}, "HardDrive");

// src/icons/Hash.ts
import van129 from "vanjs-core";
var Hash = /* @__PURE__ */ __name((props) => {
  const { line } = van129.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "9",
      x2: "20",
      y2: "9"
    }),
    line({
      x1: "4",
      y1: "15",
      x2: "20",
      y2: "15"
    }),
    line({
      x1: "10",
      y1: "3",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "16",
      y1: "3",
      x2: "14",
      y2: "21"
    })
  );
}, "Hash");

// src/icons/Headphones.ts
import van130 from "vanjs-core";
var Headphones = /* @__PURE__ */ __name((props) => {
  const { path } = van130.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 18v-6a9 9 0 0 1 18 0v6"
    }),
    path({
      d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
    })
  );
}, "Headphones");

// src/icons/Heart.ts
import van131 from "vanjs-core";
var Heart = /* @__PURE__ */ __name((props) => {
  const { path } = van131.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    })
  );
}, "Heart");

// src/icons/HelpCircle.ts
import van132 from "vanjs-core";
var HelpCircle = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van132.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })
  );
}, "HelpCircle");

// src/icons/Hexagon.ts
import van133 from "vanjs-core";
var Hexagon = /* @__PURE__ */ __name((props) => {
  const { path } = van133.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    })
  );
}, "Hexagon");

// src/icons/Home.ts
import van134 from "vanjs-core";
var Home = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van134.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }),
    polyline({
      points: "9 22 9 12 15 12 15 22"
    })
  );
}, "Home");

// src/icons/Image.ts
import van135 from "vanjs-core";
var Image = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, rect } = van135.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    circle({
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }),
    polyline({
      points: "21 15 16 10 5 21"
    })
  );
}, "Image");

// src/icons/Inbox.ts
import van136 from "vanjs-core";
var Inbox = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van136.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 16 12 14 15 10 15 8 12 2 12"
    }),
    path({
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    })
  );
}, "Inbox");

// src/icons/Info.ts
import van137 from "vanjs-core";
var Info = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van137.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    })
  );
}, "Info");

// src/icons/Instagram.ts
import van138 from "vanjs-core";
var Instagram = /* @__PURE__ */ __name((props) => {
  const { path, line, rect } = van138.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }),
    path({
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }),
    line({
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })
  );
}, "Instagram");

// src/icons/Italic.ts
import van139 from "vanjs-core";
var Italic = /* @__PURE__ */ __name((props) => {
  const { line } = van139.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "4",
      x2: "10",
      y2: "4"
    }),
    line({
      x1: "14",
      y1: "20",
      x2: "5",
      y2: "20"
    }),
    line({
      x1: "15",
      y1: "4",
      x2: "9",
      y2: "20"
    })
  );
}, "Italic");

// src/icons/Key.ts
import van140 from "vanjs-core";
var Key = /* @__PURE__ */ __name((props) => {
  const { path } = van140.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
    })
  );
}, "Key");

// src/icons/Layers.ts
import van141 from "vanjs-core";
var Layers = /* @__PURE__ */ __name((props) => {
  const { polyline, polygon } = van141.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 2 7 12 12 22 7 12 2"
    }),
    polyline({
      points: "2 17 12 22 22 17"
    }),
    polyline({
      points: "2 12 12 17 22 12"
    })
  );
}, "Layers");

// src/icons/Layout.ts
import van142 from "vanjs-core";
var Layout = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van142.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }),
    line({
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9"
    })
  );
}, "Layout");

// src/icons/LifeBuoy.ts
import van143 from "vanjs-core";
var LifeBuoy = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van143.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "9.17",
      y2: "9.17"
    }),
    line({
      x1: "14.83",
      y1: "14.83",
      x2: "19.07",
      y2: "19.07"
    }),
    line({
      x1: "14.83",
      y1: "9.17",
      x2: "19.07",
      y2: "4.93"
    }),
    line({
      x1: "14.83",
      y1: "9.17",
      x2: "18.36",
      y2: "5.64"
    }),
    line({
      x1: "4.93",
      y1: "19.07",
      x2: "9.17",
      y2: "14.83"
    })
  );
}, "LifeBuoy");

// src/icons/Link.ts
import van144 from "vanjs-core";
var Link = /* @__PURE__ */ __name((props) => {
  const { path } = van144.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }),
    path({
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    })
  );
}, "Link");

// src/icons/Link2.ts
import van145 from "vanjs-core";
var Link2 = /* @__PURE__ */ __name((props) => {
  const { path, line } = van145.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "Link2");

// src/icons/Linkedin.ts
import van146 from "vanjs-core";
var Linkedin = /* @__PURE__ */ __name((props) => {
  const { path, circle, rect } = van146.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }),
    rect({
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }),
    circle({
      cx: "4",
      cy: "4",
      r: "2"
    })
  );
}, "Linkedin");

// src/icons/List.ts
import van147 from "vanjs-core";
var List = /* @__PURE__ */ __name((props) => {
  const { line } = van147.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12"
    }),
    line({
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "3.01",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "12",
      x2: "3.01",
      y2: "12"
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "3.01",
      y2: "18"
    })
  );
}, "List");

// src/icons/Loader.ts
import van148 from "vanjs-core";
var Loader = /* @__PURE__ */ __name((props) => {
  const { line } = van148.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "6"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "22"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "7.76",
      y2: "7.76"
    }),
    line({
      x1: "16.24",
      y1: "16.24",
      x2: "19.07",
      y2: "19.07"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "6",
      y2: "12"
    }),
    line({
      x1: "18",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "4.93",
      y1: "19.07",
      x2: "7.76",
      y2: "16.24"
    }),
    line({
      x1: "16.24",
      y1: "7.76",
      x2: "19.07",
      y2: "4.93"
    })
  );
}, "Loader");

// src/icons/Lock.ts
import van149 from "vanjs-core";
var Lock = /* @__PURE__ */ __name((props) => {
  const { path, rect } = van149.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    })
  );
}, "Lock");

// src/icons/LogIn.ts
import van150 from "vanjs-core";
var LogIn = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van150.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }),
    polyline({
      points: "10 17 15 12 10 7"
    }),
    line({
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12"
    })
  );
}, "LogIn");

// src/icons/LogOut.ts
import van151 from "vanjs-core";
var LogOut = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van151.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }),
    polyline({
      points: "16 17 21 12 16 7"
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    })
  );
}, "LogOut");

// src/icons/Mail.ts
import van152 from "vanjs-core";
var Mail = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van152.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }),
    polyline({
      points: "22,6 12,13 2,6"
    })
  );
}, "Mail");

// src/icons/Map.ts
import van153 from "vanjs-core";
var Map = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van153.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18"
    }),
    line({
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22"
    })
  );
}, "Map");

// src/icons/MapPin.ts
import van154 from "vanjs-core";
var MapPin = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van154.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }),
    circle({
      cx: "12",
      cy: "10",
      r: "3"
    })
  );
}, "MapPin");

// src/icons/Maximize.ts
import van155 from "vanjs-core";
var Maximize = /* @__PURE__ */ __name((props) => {
  const { path } = van155.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
    })
  );
}, "Maximize");

// src/icons/Maximize2.ts
import van156 from "vanjs-core";
var Maximize2 = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van156.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 3 21 3 21 9"
    }),
    polyline({
      points: "9 21 3 21 3 15"
    }),
    line({
      x1: "21",
      y1: "3",
      x2: "14",
      y2: "10"
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14"
    })
  );
}, "Maximize2");

// src/icons/Meh.ts
import van157 from "vanjs-core";
var Meh = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van157.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "8",
      y1: "15",
      x2: "16",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Meh");

// src/icons/Menu.ts
import van158 from "vanjs-core";
var Menu = /* @__PURE__ */ __name((props) => {
  const { line } = van158.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })
  );
}, "Menu");

// src/icons/MessageCircle.ts
import van159 from "vanjs-core";
var MessageCircle = /* @__PURE__ */ __name((props) => {
  const { path } = van159.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    })
  );
}, "MessageCircle");

// src/icons/MessageSquare.ts
import van160 from "vanjs-core";
var MessageSquare = /* @__PURE__ */ __name((props) => {
  const { path } = van160.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })
  );
}, "MessageSquare");

// src/icons/Mic.ts
import van161 from "vanjs-core";
var Mic = /* @__PURE__ */ __name((props) => {
  const { path, line } = van161.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
    }),
    path({
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23"
    })
  );
}, "Mic");

// src/icons/MicOff.ts
import van162 from "vanjs-core";
var MicOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van162.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
    }),
    path({
      d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23"
    })
  );
}, "MicOff");

// src/icons/Minimize.ts
import van163 from "vanjs-core";
var Minimize = /* @__PURE__ */ __name((props) => {
  const { path } = van163.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
    })
  );
}, "Minimize");

// src/icons/Minimize2.ts
import van164 from "vanjs-core";
var Minimize2 = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van164.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 14 10 14 10 20"
    }),
    polyline({
      points: "20 10 14 10 14 4"
    }),
    line({
      x1: "14",
      y1: "10",
      x2: "21",
      y2: "3"
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14"
    })
  );
}, "Minimize2");

// src/icons/Minus.ts
import van165 from "vanjs-core";
var Minus = /* @__PURE__ */ __name((props) => {
  const { line } = van165.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })
  );
}, "Minus");

// src/icons/MinusCircle.ts
import van166 from "vanjs-core";
var MinusCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van166.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "MinusCircle");

// src/icons/MinusSquare.ts
import van167 from "vanjs-core";
var MinusSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van167.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "MinusSquare");

// src/icons/Monitor.ts
import van168 from "vanjs-core";
var Monitor = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van168.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21"
    })
  );
}, "Monitor");

// src/icons/Moon.ts
import van169 from "vanjs-core";
var Moon = /* @__PURE__ */ __name((props) => {
  const { path } = van169.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
    })
  );
}, "Moon");

// src/icons/MoreHorizontal.ts
import van170 from "vanjs-core";
var MoreHorizontal = /* @__PURE__ */ __name((props) => {
  const { circle } = van170.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "19",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "5",
      cy: "12",
      r: "1"
    })
  );
}, "MoreHorizontal");

// src/icons/MoreVertical.ts
import van171 from "vanjs-core";
var MoreVertical = /* @__PURE__ */ __name((props) => {
  const { circle } = van171.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "12",
      cy: "5",
      r: "1"
    }),
    circle({
      cx: "12",
      cy: "19",
      r: "1"
    })
  );
}, "MoreVertical");

// src/icons/MousePointer.ts
import van172 from "vanjs-core";
var MousePointer = /* @__PURE__ */ __name((props) => {
  const { path } = van172.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
    }),
    path({
      d: "M13 13l6 6"
    })
  );
}, "MousePointer");

// src/icons/Move.ts
import van173 from "vanjs-core";
var Move = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van173.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "5 9 2 12 5 15"
    }),
    polyline({
      points: "9 5 12 2 15 5"
    }),
    polyline({
      points: "15 19 12 22 9 19"
    }),
    polyline({
      points: "19 9 22 12 19 15"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "22"
    })
  );
}, "Move");

// src/icons/Music.ts
import van174 from "vanjs-core";
var Music = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van174.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 18V5l12-2v13"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "18",
      cy: "16",
      r: "3"
    })
  );
}, "Music");

// src/icons/Navigation.ts
import van175 from "vanjs-core";
var Navigation = /* @__PURE__ */ __name((props) => {
  const { polygon } = van175.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "3 11 22 2 13 21 11 13 3 11"
    })
  );
}, "Navigation");

// src/icons/Navigation2.ts
import van176 from "vanjs-core";
var Navigation2 = /* @__PURE__ */ __name((props) => {
  const { polygon } = van176.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 19 21 12 17 5 21 12 2"
    })
  );
}, "Navigation2");

// src/icons/Octagon.ts
import van177 from "vanjs-core";
var Octagon = /* @__PURE__ */ __name((props) => {
  const { polygon } = van177.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    })
  );
}, "Octagon");

// src/icons/Package.ts
import van178 from "vanjs-core";
var Package = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van178.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "16.5",
      y1: "9.4",
      x2: "7.5",
      y2: "4.21"
    }),
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Package");

// src/icons/Paperclip.ts
import van179 from "vanjs-core";
var Paperclip = /* @__PURE__ */ __name((props) => {
  const { path } = van179.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    })
  );
}, "Paperclip");

// src/icons/Pause.ts
import van180 from "vanjs-core";
var Pause = /* @__PURE__ */ __name((props) => {
  const { rect } = van180.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "6",
      y: "4",
      width: "4",
      height: "16"
    }),
    rect({
      x: "14",
      y: "4",
      width: "4",
      height: "16"
    })
  );
}, "Pause");

// src/icons/PauseCircle.ts
import van181 from "vanjs-core";
var PauseCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van181.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "10",
      y1: "15",
      x2: "10",
      y2: "9"
    }),
    line({
      x1: "14",
      y1: "15",
      x2: "14",
      y2: "9"
    })
  );
}, "PauseCircle");

// src/icons/PenTool.ts
import van182 from "vanjs-core";
var PenTool = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van182.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 19l7-7 3 3-7 7-3-3z"
    }),
    path({
      d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
    }),
    path({
      d: "M2 2l7.586 7.586"
    }),
    circle({
      cx: "11",
      cy: "11",
      r: "2"
    })
  );
}, "PenTool");

// src/icons/Percent.ts
import van183 from "vanjs-core";
var Percent = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van183.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "5",
      x2: "5",
      y2: "19"
    }),
    circle({
      cx: "6.5",
      cy: "6.5",
      r: "2.5"
    }),
    circle({
      cx: "17.5",
      cy: "17.5",
      r: "2.5"
    })
  );
}, "Percent");

// src/icons/Phone.ts
import van184 from "vanjs-core";
var Phone = /* @__PURE__ */ __name((props) => {
  const { path } = van184.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "Phone");

// src/icons/PhoneCall.ts
import van185 from "vanjs-core";
var PhoneCall = /* @__PURE__ */ __name((props) => {
  const { path } = van185.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneCall");

// src/icons/PhoneForwarded.ts
import van186 from "vanjs-core";
var PhoneForwarded = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van186.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "19 1 23 5 19 9"
    }),
    line({
      x1: "15",
      y1: "5",
      x2: "23",
      y2: "5"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneForwarded");

// src/icons/PhoneIncoming.ts
import van187 from "vanjs-core";
var PhoneIncoming = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van187.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 2 16 8 22 8"
    }),
    line({
      x1: "23",
      y1: "1",
      x2: "16",
      y2: "8"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneIncoming");

// src/icons/PhoneMissed.ts
import van188 from "vanjs-core";
var PhoneMissed = /* @__PURE__ */ __name((props) => {
  const { path, line } = van188.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "23",
      y1: "1",
      x2: "17",
      y2: "7"
    }),
    line({
      x1: "17",
      y1: "1",
      x2: "23",
      y2: "7"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneMissed");

// src/icons/PhoneOff.ts
import van189 from "vanjs-core";
var PhoneOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van189.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
    }),
    line({
      x1: "23",
      y1: "1",
      x2: "1",
      y2: "23"
    })
  );
}, "PhoneOff");

// src/icons/PhoneOutgoing.ts
import van190 from "vanjs-core";
var PhoneOutgoing = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van190.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 7 23 1 17 1"
    }),
    line({
      x1: "16",
      y1: "8",
      x2: "23",
      y2: "1"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneOutgoing");

// src/icons/PieChart.ts
import van191 from "vanjs-core";
var PieChart = /* @__PURE__ */ __name((props) => {
  const { path } = van191.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21.21 15.89A10 10 0 1 1 8 2.83"
    }),
    path({
      d: "M22 12A10 10 0 0 0 12 2v10z"
    })
  );
}, "PieChart");

// src/icons/Play.ts
import van192 from "vanjs-core";
var Play = /* @__PURE__ */ __name((props) => {
  const { polygon } = van192.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "5 3 19 12 5 21 5 3"
    })
  );
}, "Play");

// src/icons/PlayCircle.ts
import van193 from "vanjs-core";
var PlayCircle = /* @__PURE__ */ __name((props) => {
  const { polygon, circle } = van193.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polygon({
      points: "10 8 16 12 10 16 10 8"
    })
  );
}, "PlayCircle");

// src/icons/Plus.ts
import van194 from "vanjs-core";
var Plus = /* @__PURE__ */ __name((props) => {
  const { line } = van194.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })
  );
}, "Plus");

// src/icons/PlusCircle.ts
import van195 from "vanjs-core";
var PlusCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van195.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "PlusCircle");

// src/icons/PlusSquare.ts
import van196 from "vanjs-core";
var PlusSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van196.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "PlusSquare");

// src/icons/Pocket.ts
import van197 from "vanjs-core";
var Pocket = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van197.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
    }),
    polyline({
      points: "8 10 12 14 16 10"
    })
  );
}, "Pocket");

// src/icons/Power.ts
import van198 from "vanjs-core";
var Power = /* @__PURE__ */ __name((props) => {
  const { path, line } = van198.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18.36 6.64a9 9 0 1 1-12.73 0"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12"
    })
  );
}, "Power");

// src/icons/Printer.ts
import van199 from "vanjs-core";
var Printer = /* @__PURE__ */ __name((props) => {
  const { polyline, path, rect } = van199.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 6 2 18 2 18 9"
    }),
    path({
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    }),
    rect({
      x: "6",
      y: "14",
      width: "12",
      height: "8"
    })
  );
}, "Printer");

// src/icons/Radio.ts
import van200 from "vanjs-core";
var Radio = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van200.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "2"
    }),
    path({
      d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
    })
  );
}, "Radio");

// src/icons/RefreshCcw.ts
import van201 from "vanjs-core";
var RefreshCcw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van201.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10"
    }),
    polyline({
      points: "23 20 23 14 17 14"
    }),
    path({
      d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
    })
  );
}, "RefreshCcw");

// src/icons/RefreshCw.ts
import van202 from "vanjs-core";
var RefreshCw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van202.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10"
    }),
    polyline({
      points: "1 20 1 14 7 14"
    }),
    path({
      d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    })
  );
}, "RefreshCw");

// src/icons/Repeat.ts
import van203 from "vanjs-core";
var Repeat = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van203.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "17 1 21 5 17 9"
    }),
    path({
      d: "M3 11V9a4 4 0 0 1 4-4h14"
    }),
    polyline({
      points: "7 23 3 19 7 15"
    }),
    path({
      d: "M21 13v2a4 4 0 0 1-4 4H3"
    })
  );
}, "Repeat");

// src/icons/Rewind.ts
import van204 from "vanjs-core";
var Rewind = /* @__PURE__ */ __name((props) => {
  const { polygon } = van204.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 19 2 12 11 5 11 19"
    }),
    polygon({
      points: "22 19 13 12 22 5 22 19"
    })
  );
}, "Rewind");

// src/icons/RotateCcw.ts
import van205 from "vanjs-core";
var RotateCcw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van205.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10"
    }),
    path({
      d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
    })
  );
}, "RotateCcw");

// src/icons/RotateCw.ts
import van206 from "vanjs-core";
var RotateCw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van206.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10"
    }),
    path({
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
    })
  );
}, "RotateCw");

// src/icons/Rss.ts
import van207 from "vanjs-core";
var Rss = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van207.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 11a9 9 0 0 1 9 9"
    }),
    path({
      d: "M4 4a16 16 0 0 1 16 16"
    }),
    circle({
      cx: "5",
      cy: "19",
      r: "1"
    })
  );
}, "Rss");

// src/icons/Save.ts
import van208 from "vanjs-core";
var Save = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van208.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
    }),
    polyline({
      points: "17 21 17 13 7 13 7 21"
    }),
    polyline({
      points: "7 3 7 8 15 8"
    })
  );
}, "Save");

// src/icons/Scissors.ts
import van209 from "vanjs-core";
var Scissors = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van209.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    line({
      x1: "20",
      y1: "4",
      x2: "8.12",
      y2: "15.88"
    }),
    line({
      x1: "14.47",
      y1: "14.48",
      x2: "20",
      y2: "20"
    }),
    line({
      x1: "8.12",
      y1: "8.12",
      x2: "12",
      y2: "12"
    })
  );
}, "Scissors");

// src/icons/Search.ts
import van210 from "vanjs-core";
var Search = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van210.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })
  );
}, "Search");

// src/icons/Send.ts
import van211 from "vanjs-core";
var Send = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van211.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }),
    polygon({
      points: "22 2 15 22 11 13 2 9 22 2"
    })
  );
}, "Send");

// src/icons/Server.ts
import van212 from "vanjs-core";
var Server = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van212.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "6.01",
      y2: "6"
    }),
    line({
      x1: "6",
      y1: "18",
      x2: "6.01",
      y2: "18"
    })
  );
}, "Server");

// src/icons/Settings.ts
import van213 from "vanjs-core";
var Settings = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van213.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    }),
    path({
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    })
  );
}, "Settings");

// src/icons/Share.ts
import van214 from "vanjs-core";
var Share = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van214.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }),
    polyline({
      points: "16 6 12 2 8 6"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "15"
    })
  );
}, "Share");

// src/icons/Share2.ts
import van215 from "vanjs-core";
var Share2 = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van215.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "5",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "12",
      r: "3"
    }),
    circle({
      cx: "18",
      cy: "19",
      r: "3"
    }),
    line({
      x1: "8.59",
      y1: "13.51",
      x2: "15.42",
      y2: "17.49"
    }),
    line({
      x1: "15.41",
      y1: "6.51",
      x2: "8.59",
      y2: "10.49"
    })
  );
}, "Share2");

// src/icons/Shield.ts
import van216 from "vanjs-core";
var Shield = /* @__PURE__ */ __name((props) => {
  const { path } = van216.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    })
  );
}, "Shield");

// src/icons/ShieldOff.ts
import van217 from "vanjs-core";
var ShieldOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van217.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
    }),
    path({
      d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "ShieldOff");

// src/icons/ShoppingBag.ts
import van218 from "vanjs-core";
var ShoppingBag = /* @__PURE__ */ __name((props) => {
  const { path, line } = van218.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    path({
      d: "M16 10a4 4 0 0 1-8 0"
    })
  );
}, "ShoppingBag");

// src/icons/ShoppingCart.ts
import van219 from "vanjs-core";
var ShoppingCart = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van219.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "9",
      cy: "21",
      r: "1"
    }),
    circle({
      cx: "20",
      cy: "21",
      r: "1"
    }),
    path({
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    })
  );
}, "ShoppingCart");

// src/icons/Shuffle.ts
import van220 from "vanjs-core";
var Shuffle = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van220.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 3 21 3 21 8"
    }),
    line({
      x1: "4",
      y1: "20",
      x2: "21",
      y2: "3"
    }),
    polyline({
      points: "21 16 21 21 16 21"
    }),
    line({
      x1: "15",
      y1: "15",
      x2: "21",
      y2: "21"
    }),
    line({
      x1: "4",
      y1: "4",
      x2: "9",
      y2: "9"
    })
  );
}, "Shuffle");

// src/icons/Sidebar.ts
import van221 from "vanjs-core";
var Sidebar = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van221.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21"
    })
  );
}, "Sidebar");

// src/icons/SkipBack.ts
import van222 from "vanjs-core";
var SkipBack = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van222.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "19 20 9 12 19 4 19 20"
    }),
    line({
      x1: "5",
      y1: "19",
      x2: "5",
      y2: "5"
    })
  );
}, "SkipBack");

// src/icons/SkipForward.ts
import van223 from "vanjs-core";
var SkipForward = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van223.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "5 4 15 12 5 20 5 4"
    }),
    line({
      x1: "19",
      y1: "5",
      x2: "19",
      y2: "19"
    })
  );
}, "SkipForward");

// src/icons/Slack.ts
import van224 from "vanjs-core";
var Slack = /* @__PURE__ */ __name((props) => {
  const { path } = van224.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
    }),
    path({
      d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    }),
    path({
      d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
    }),
    path({
      d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
    }),
    path({
      d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
    }),
    path({
      d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
    }),
    path({
      d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
    }),
    path({
      d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
    })
  );
}, "Slack");

// src/icons/Slash.ts
import van225 from "vanjs-core";
var Slash = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van225.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07"
    })
  );
}, "Slash");

// src/icons/Sliders.ts
import van226 from "vanjs-core";
var Sliders = /* @__PURE__ */ __name((props) => {
  const { line } = van226.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }),
    line({
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }),
    line({
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }),
    line({
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }),
    line({
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }),
    line({
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }),
    line({
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    })
  );
}, "Sliders");

// src/icons/Smartphone.ts
import van227 from "vanjs-core";
var Smartphone = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van227.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    })
  );
}, "Smartphone");

// src/icons/Smile.ts
import van228 from "vanjs-core";
var Smile = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van228.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M8 14s1.5 2 4 2 4-2 4-2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Smile");

// src/icons/Speaker.ts
import van229 from "vanjs-core";
var Speaker = /* @__PURE__ */ __name((props) => {
  const { circle, line, rect } = van229.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    circle({
      cx: "12",
      cy: "14",
      r: "4"
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12.01",
      y2: "6"
    })
  );
}, "Speaker");

// src/icons/Square.ts
import van230 from "vanjs-core";
var Square = /* @__PURE__ */ __name((props) => {
  const { rect } = van230.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    })
  );
}, "Square");

// src/icons/Star.ts
import van231 from "vanjs-core";
var Star = /* @__PURE__ */ __name((props) => {
  const { polygon } = van231.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    })
  );
}, "Star");

// src/icons/StopCircle.ts
import van232 from "vanjs-core";
var StopCircle = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = van232.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    })
  );
}, "StopCircle");

// src/icons/Sun.ts
import van233 from "vanjs-core";
var Sun = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van233.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "5"
    }),
    line({
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "3"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "4.22",
      y1: "4.22",
      x2: "5.64",
      y2: "5.64"
    }),
    line({
      x1: "18.36",
      y1: "18.36",
      x2: "19.78",
      y2: "19.78"
    }),
    line({
      x1: "1",
      y1: "12",
      x2: "3",
      y2: "12"
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "23",
      y2: "12"
    }),
    line({
      x1: "4.22",
      y1: "19.78",
      x2: "5.64",
      y2: "18.36"
    }),
    line({
      x1: "18.36",
      y1: "5.64",
      x2: "19.78",
      y2: "4.22"
    })
  );
}, "Sun");

// src/icons/Sunrise.ts
import van234 from "vanjs-core";
var Sunrise = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van234.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 18a5 5 0 0 0-10 0"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "9"
    }),
    line({
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64"
    }),
    line({
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18"
    }),
    line({
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22"
    }),
    line({
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22"
    }),
    polyline({
      points: "8 6 12 2 16 6"
    })
  );
}, "Sunrise");

// src/icons/Sunset.ts
import van235 from "vanjs-core";
var Sunset = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van235.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 18a5 5 0 0 0-10 0"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "2"
    }),
    line({
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64"
    }),
    line({
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18"
    }),
    line({
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22"
    }),
    line({
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22"
    }),
    polyline({
      points: "16 5 12 9 8 5"
    })
  );
}, "Sunset");

// src/icons/Table.ts
import van236 from "vanjs-core";
var Table = /* @__PURE__ */ __name((props) => {
  const { path } = van236.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
    })
  );
}, "Table");

// src/icons/Tablet.ts
import van237 from "vanjs-core";
var Tablet = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van237.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    })
  );
}, "Tablet");

// src/icons/Tag.ts
import van238 from "vanjs-core";
var Tag = /* @__PURE__ */ __name((props) => {
  const { path, line } = van238.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    }),
    line({
      x1: "7",
      y1: "7",
      x2: "7.01",
      y2: "7"
    })
  );
}, "Tag");

// src/icons/Target.ts
import van239 from "vanjs-core";
var Target = /* @__PURE__ */ __name((props) => {
  const { circle } = van239.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "6"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "2"
    })
  );
}, "Target");

// src/icons/Terminal.ts
import van240 from "vanjs-core";
var Terminal = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van240.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 17 10 11 4 5"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19"
    })
  );
}, "Terminal");

// src/icons/Thermometer.ts
import van241 from "vanjs-core";
var Thermometer = /* @__PURE__ */ __name((props) => {
  const { path } = van241.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
    })
  );
}, "Thermometer");

// src/icons/ThumbsDown.ts
import van242 from "vanjs-core";
var ThumbsDown = /* @__PURE__ */ __name((props) => {
  const { path } = van242.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
    })
  );
}, "ThumbsDown");

// src/icons/ThumbsUp.ts
import van243 from "vanjs-core";
var ThumbsUp = /* @__PURE__ */ __name((props) => {
  const { path } = van243.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
    })
  );
}, "ThumbsUp");

// src/icons/ToggleLeft.ts
import van244 from "vanjs-core";
var ToggleLeft = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = van244.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7"
    }),
    circle({
      cx: "8",
      cy: "12",
      r: "3"
    })
  );
}, "ToggleLeft");

// src/icons/ToggleRight.ts
import van245 from "vanjs-core";
var ToggleRight = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = van245.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7"
    }),
    circle({
      cx: "16",
      cy: "12",
      r: "3"
    })
  );
}, "ToggleRight");

// src/icons/Tool.ts
import van246 from "vanjs-core";
var Tool = /* @__PURE__ */ __name((props) => {
  const { path } = van246.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    })
  );
}, "Tool");

// src/icons/Trash.ts
import van247 from "vanjs-core";
var Trash = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = van247.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6"
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    })
  );
}, "Trash");

// src/icons/Trash2.ts
import van248 from "vanjs-core";
var Trash2 = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van248.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6"
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }),
    line({
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }),
    line({
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    })
  );
}, "Trash2");

// src/icons/Trello.ts
import van249 from "vanjs-core";
var Trello = /* @__PURE__ */ __name((props) => {
  const { rect } = van249.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "7",
      y: "7",
      width: "3",
      height: "9"
    }),
    rect({
      x: "14",
      y: "7",
      width: "3",
      height: "5"
    })
  );
}, "Trello");

// src/icons/TrendingDown.ts
import van250 from "vanjs-core";
var TrendingDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = van250.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 18 13.5 8.5 8.5 13.5 1 6"
    }),
    polyline({
      points: "17 18 23 18 23 12"
    })
  );
}, "TrendingDown");

// src/icons/TrendingUp.ts
import van251 from "vanjs-core";
var TrendingUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = van251.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }),
    polyline({
      points: "17 6 23 6 23 12"
    })
  );
}, "TrendingUp");

// src/icons/Triangle.ts
import van252 from "vanjs-core";
var Triangle = /* @__PURE__ */ __name((props) => {
  const { path } = van252.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    })
  );
}, "Triangle");

// src/icons/Truck.ts
import van253 from "vanjs-core";
var Truck = /* @__PURE__ */ __name((props) => {
  const { polygon, circle, rect } = van253.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "3",
      width: "15",
      height: "13"
    }),
    polygon({
      points: "16 8 20 8 23 11 23 16 16 16 16 8"
    }),
    circle({
      cx: "5.5",
      cy: "18.5",
      r: "2.5"
    }),
    circle({
      cx: "18.5",
      cy: "18.5",
      r: "2.5"
    })
  );
}, "Truck");

// src/icons/Tv.ts
import van254 from "vanjs-core";
var Tv = /* @__PURE__ */ __name((props) => {
  const { polyline, rect } = van254.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2"
    }),
    polyline({
      points: "17 2 12 7 7 2"
    })
  );
}, "Tv");

// src/icons/Twitch.ts
import van255 from "vanjs-core";
var Twitch = /* @__PURE__ */ __name((props) => {
  const { path } = van255.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
    })
  );
}, "Twitch");

// src/icons/Twitter.ts
import van256 from "vanjs-core";
var Twitter = /* @__PURE__ */ __name((props) => {
  const { path } = van256.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    })
  );
}, "Twitter");

// src/icons/Type.ts
import van257 from "vanjs-core";
var Type = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van257.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 7 4 4 20 4 20 7"
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20"
    }),
    line({
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "20"
    })
  );
}, "Type");

// src/icons/Umbrella.ts
import van258 from "vanjs-core";
var Umbrella = /* @__PURE__ */ __name((props) => {
  const { path } = van258.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
    })
  );
}, "Umbrella");

// src/icons/Underline.ts
import van259 from "vanjs-core";
var Underline = /* @__PURE__ */ __name((props) => {
  const { path, line } = van259.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
    }),
    line({
      x1: "4",
      y1: "21",
      x2: "20",
      y2: "21"
    })
  );
}, "Underline");

// src/icons/Unlock.ts
import van260 from "vanjs-core";
var Unlock = /* @__PURE__ */ __name((props) => {
  const { path, rect } = van260.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 9.9-1"
    })
  );
}, "Unlock");

// src/icons/Upload.ts
import van261 from "vanjs-core";
var Upload = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van261.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    polyline({
      points: "17 8 12 3 7 8"
    }),
    line({
      x1: "12",
      y1: "3",
      x2: "12",
      y2: "15"
    })
  );
}, "Upload");

// src/icons/UploadCloud.ts
import van262 from "vanjs-core";
var UploadCloud = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = van262.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 16 12 12 8 16"
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }),
    path({
      d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
    }),
    polyline({
      points: "16 16 12 12 8 16"
    })
  );
}, "UploadCloud");

// src/icons/User.ts
import van263 from "vanjs-core";
var User = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van263.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "12",
      cy: "7",
      r: "4"
    })
  );
}, "User");

// src/icons/UserCheck.ts
import van264 from "vanjs-core";
var UserCheck = /* @__PURE__ */ __name((props) => {
  const { polyline, path, circle } = van264.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    polyline({
      points: "17 11 19 13 23 9"
    })
  );
}, "UserCheck");

// src/icons/UserMinus.ts
import van265 from "vanjs-core";
var UserMinus = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van265.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11"
    })
  );
}, "UserMinus");

// src/icons/UserPlus.ts
import van266 from "vanjs-core";
var UserPlus = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van266.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "20",
      y1: "8",
      x2: "20",
      y2: "14"
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11"
    })
  );
}, "UserPlus");

// src/icons/UserX.ts
import van267 from "vanjs-core";
var UserX = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = van267.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "18",
      y1: "8",
      x2: "23",
      y2: "13"
    }),
    line({
      x1: "23",
      y1: "8",
      x2: "18",
      y2: "13"
    })
  );
}, "UserX");

// src/icons/Users.ts
import van268 from "vanjs-core";
var Users = /* @__PURE__ */ __name((props) => {
  const { path, circle } = van268.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "9",
      cy: "7",
      r: "4"
    }),
    path({
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }),
    path({
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })
  );
}, "Users");

// src/icons/Video.ts
import van269 from "vanjs-core";
var Video = /* @__PURE__ */ __name((props) => {
  const { polygon, rect } = van269.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "23 7 16 12 23 17 23 7"
    }),
    rect({
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2"
    })
  );
}, "Video");

// src/icons/VideoOff.ts
import van270 from "vanjs-core";
var VideoOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van270.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "VideoOff");

// src/icons/Voicemail.ts
import van271 from "vanjs-core";
var Voicemail = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van271.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "5.5",
      cy: "11.5",
      r: "4.5"
    }),
    circle({
      cx: "18.5",
      cy: "11.5",
      r: "4.5"
    }),
    line({
      x1: "5.5",
      y1: "16",
      x2: "18.5",
      y2: "16"
    })
  );
}, "Voicemail");

// src/icons/Volume.ts
import van272 from "vanjs-core";
var Volume = /* @__PURE__ */ __name((props) => {
  const { polygon } = van272.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    })
  );
}, "Volume");

// src/icons/Volume1.ts
import van273 from "vanjs-core";
var Volume1 = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = van273.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    path({
      d: "M15.54 8.46a5 5 0 0 1 0 7.07"
    })
  );
}, "Volume1");

// src/icons/Volume2.ts
import van274 from "vanjs-core";
var Volume2 = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = van274.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    path({
      d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
    })
  );
}, "Volume2");

// src/icons/VolumeX.ts
import van275 from "vanjs-core";
var VolumeX = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van275.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    line({
      x1: "23",
      y1: "9",
      x2: "17",
      y2: "15"
    }),
    line({
      x1: "17",
      y1: "9",
      x2: "23",
      y2: "15"
    })
  );
}, "VolumeX");

// src/icons/Watch.ts
import van276 from "vanjs-core";
var Watch = /* @__PURE__ */ __name((props) => {
  const { polyline, path, circle } = van276.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "7"
    }),
    polyline({
      points: "12 9 12 12 13.5 13.5"
    }),
    path({
      d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
    })
  );
}, "Watch");

// src/icons/Wifi.ts
import van277 from "vanjs-core";
var Wifi = /* @__PURE__ */ __name((props) => {
  const { path, line } = van277.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 12.55a11 11 0 0 1 14.08 0"
    }),
    path({
      d: "M1.42 9a16 16 0 0 1 21.16 0"
    }),
    path({
      d: "M8.53 16.11a6 6 0 0 1 6.95 0"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20"
    })
  );
}, "Wifi");

// src/icons/WifiOff.ts
import van278 from "vanjs-core";
var WifiOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = van278.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
    }),
    path({
      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
    }),
    path({
      d: "M10.71 5.05A16 16 0 0 1 22.58 9"
    }),
    path({
      d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
    }),
    path({
      d: "M8.53 16.11a6 6 0 0 1 6.95 0"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20"
    })
  );
}, "WifiOff");

// src/icons/Wind.ts
import van279 from "vanjs-core";
var Wind = /* @__PURE__ */ __name((props) => {
  const { path } = van279.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    })
  );
}, "Wind");

// src/icons/X.ts
import van280 from "vanjs-core";
var X = /* @__PURE__ */ __name((props) => {
  const { line } = van280.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })
  );
}, "X");

// src/icons/XCircle.ts
import van281 from "vanjs-core";
var XCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van281.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    })
  );
}, "XCircle");

// src/icons/XOctagon.ts
import van282 from "vanjs-core";
var XOctagon = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = van282.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    })
  );
}, "XOctagon");

// src/icons/XSquare.ts
import van283 from "vanjs-core";
var XSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = van283.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    })
  );
}, "XSquare");

// src/icons/Youtube.ts
import van284 from "vanjs-core";
var Youtube = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = van284.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
    }),
    polygon({
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
    })
  );
}, "Youtube");

// src/icons/Zap.ts
import van285 from "vanjs-core";
var Zap = /* @__PURE__ */ __name((props) => {
  const { polygon } = van285.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    })
  );
}, "Zap");

// src/icons/ZapOff.ts
import van286 from "vanjs-core";
var ZapOff = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = van286.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "12.41 6.75 13 2 10.57 4.92"
    }),
    polyline({
      points: "18.57 12.91 21 10 15.66 10"
    }),
    polyline({
      points: "8 8 3 14 12 14 11 22 16 16"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "ZapOff");

// src/icons/ZoomIn.ts
import van287 from "vanjs-core";
var ZoomIn = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van287.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }),
    line({
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14"
    }),
    line({
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })
  );
}, "ZoomIn");

// src/icons/ZoomOut.ts
import van288 from "vanjs-core";
var ZoomOut = /* @__PURE__ */ __name((props) => {
  const { circle, line } = van288.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }),
    line({
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })
  );
}, "ZoomOut");
export {
  Activity,
  Airplay,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpLeft,
  ArrowUpRight,
  AtSign,
  Award,
  BarChart,
  BarChart2,
  Battery,
  BatteryCharging,
  Bell,
  BellOff,
  Bluetooth,
  Bold,
  Book,
  BookOpen,
  Bookmark,
  Box,
  Briefcase,
  Calendar,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  Chrome,
  Circle,
  Clipboard,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Command,
  Compass,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DivideCircle,
  DivideSquare,
  DollarSign,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  FastForward,
  Feather,
  Figma,
  File,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart,
  HelpCircle,
  Hexagon,
  Home,
  Image,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link,
  Link2,
  Linkedin,
  List,
  Loader,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Map,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server,
  Settings,
  Share,
  Share2,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Table,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  UploadCloud,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Video,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut
};
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map