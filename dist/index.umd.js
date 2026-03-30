/*! vanjs-feather UMD v0.1.7 | thednp © 2026 | MIT-License */
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vanjs-core")) : typeof define === "function" && define.amd ? define(["exports", "vanjs-core"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.VanJSFeather = {}, global.van));
})(this, function(exports, vanjs_core) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	vanjs_core = __toESM(vanjs_core);
	//#region src/FeatherIcon.ts
	const svgNamespace = "http://www.w3.org/2000/svg";
	const FeatherIcon = (initialProps = {}, ...children) => {
		const { svg } = vanjs_core.default.tags(svgNamespace);
		const props = Object.fromEntries(Object.entries(initialProps).filter(([_, val]) => val));
		return svg({
			xmlns: svgNamespace,
			viewBox: "0 0 24 24",
			fill: "none",
			width: 24,
			height: 24,
			stroke: "currentColor",
			"stroke-width": 2,
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			...props
		}, children);
	};
	//#endregion
	//#region src/icons/Activity.ts
	const Activity = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "22 12 18 12 15 21 9 3 6 12 2 12" }));
	};
	//#endregion
	//#region src/icons/Airplay.ts
	const Airplay = (props = {}) => {
		const { path, polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }), polygon({ points: "12 15 17 21 7 21 12 15" }));
	};
	//#endregion
	//#region src/icons/AlertCircle.ts
	const AlertCircle = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "12"
		}), line({
			x1: "12",
			y1: "16",
			x2: "12.01",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/AlertOctagon.ts
	const AlertOctagon = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "12"
		}), line({
			x1: "12",
			y1: "16",
			x2: "12.01",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/AlertTriangle.ts
	const AlertTriangle = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }), line({
			x1: "12",
			y1: "9",
			x2: "12",
			y2: "13"
		}), line({
			x1: "12",
			y1: "17",
			x2: "12.01",
			y2: "17"
		}));
	};
	//#endregion
	//#region src/icons/AlignCenter.ts
	const AlignCenter = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "18",
			y1: "10",
			x2: "6",
			y2: "10"
		}), line({
			x1: "21",
			y1: "6",
			x2: "3",
			y2: "6"
		}), line({
			x1: "21",
			y1: "14",
			x2: "3",
			y2: "14"
		}), line({
			x1: "18",
			y1: "18",
			x2: "6",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/AlignJustify.ts
	const AlignJustify = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "21",
			y1: "10",
			x2: "3",
			y2: "10"
		}), line({
			x1: "21",
			y1: "6",
			x2: "3",
			y2: "6"
		}), line({
			x1: "21",
			y1: "14",
			x2: "3",
			y2: "14"
		}), line({
			x1: "21",
			y1: "18",
			x2: "3",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/AlignLeft.ts
	const AlignLeft = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "17",
			y1: "10",
			x2: "3",
			y2: "10"
		}), line({
			x1: "21",
			y1: "6",
			x2: "3",
			y2: "6"
		}), line({
			x1: "21",
			y1: "14",
			x2: "3",
			y2: "14"
		}), line({
			x1: "17",
			y1: "18",
			x2: "3",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/AlignRight.ts
	const AlignRight = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "21",
			y1: "10",
			x2: "7",
			y2: "10"
		}), line({
			x1: "21",
			y1: "6",
			x2: "3",
			y2: "6"
		}), line({
			x1: "21",
			y1: "14",
			x2: "3",
			y2: "14"
		}), line({
			x1: "21",
			y1: "18",
			x2: "7",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Anchor.ts
	const Anchor = (props = {}) => {
		const { circle, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "5",
			"r": "3"
		}), line({
			x1: "12",
			y1: "22",
			x2: "12",
			y2: "8"
		}), path({ "d": "M5 12H2a10 10 0 0 0 20 0h-3" }));
	};
	//#endregion
	//#region src/icons/Aperture.ts
	const Aperture = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "14.31",
			y1: "8",
			x2: "20.05",
			y2: "17.94"
		}), line({
			x1: "9.69",
			y1: "8",
			x2: "21.17",
			y2: "8"
		}), line({
			x1: "7.38",
			y1: "12",
			x2: "13.12",
			y2: "2.06"
		}), line({
			x1: "9.69",
			y1: "16",
			x2: "3.95",
			y2: "6.06"
		}), line({
			x1: "14.31",
			y1: "16",
			x2: "2.83",
			y2: "16"
		}), line({
			x1: "16.62",
			y1: "12",
			x2: "10.88",
			y2: "21.94"
		}));
	};
	//#endregion
	//#region src/icons/Archive.ts
	const Archive = (props = {}) => {
		const { polyline, rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "21 8 21 21 3 21 3 8" }), rect({
			"x": "1",
			"y": "3",
			width: "22",
			height: "5"
		}), line({
			x1: "10",
			y1: "12",
			x2: "14",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/ArrowDownCircle.ts
	const ArrowDownCircle = (props = {}) => {
		const { circle, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polyline({ points: "8 12 12 16 16 12" }), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/ArrowDownLeft.ts
	const ArrowDownLeft = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "17",
			y1: "7",
			x2: "7",
			y2: "17"
		}), polyline({ points: "17 17 7 17 7 7" }));
	};
	//#endregion
	//#region src/icons/ArrowDownRight.ts
	const ArrowDownRight = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "7",
			y1: "7",
			x2: "17",
			y2: "17"
		}), polyline({ points: "17 7 17 17 7 17" }));
	};
	//#endregion
	//#region src/icons/ArrowDown.ts
	const ArrowDown = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "5",
			x2: "12",
			y2: "19"
		}), polyline({ points: "19 12 12 19 5 12" }));
	};
	//#endregion
	//#region src/icons/ArrowLeftCircle.ts
	const ArrowLeftCircle = (props = {}) => {
		const { circle, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polyline({ points: "12 8 8 12 12 16" }), line({
			x1: "16",
			y1: "12",
			x2: "8",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/ArrowLeft.ts
	const ArrowLeft = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "19",
			y1: "12",
			x2: "5",
			y2: "12"
		}), polyline({ points: "12 19 5 12 12 5" }));
	};
	//#endregion
	//#region src/icons/ArrowRightCircle.ts
	const ArrowRightCircle = (props = {}) => {
		const { circle, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polyline({ points: "12 16 16 12 12 8" }), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/ArrowRight.ts
	const ArrowRight = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "5",
			y1: "12",
			x2: "19",
			y2: "12"
		}), polyline({ points: "12 5 19 12 12 19" }));
	};
	//#endregion
	//#region src/icons/ArrowUpCircle.ts
	const ArrowUpCircle = (props = {}) => {
		const { circle, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polyline({ points: "16 12 12 8 8 12" }), line({
			x1: "12",
			y1: "16",
			x2: "12",
			y2: "8"
		}));
	};
	//#endregion
	//#region src/icons/ArrowUpLeft.ts
	const ArrowUpLeft = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "17",
			y1: "17",
			x2: "7",
			y2: "7"
		}), polyline({ points: "7 17 7 7 17 7" }));
	};
	//#endregion
	//#region src/icons/ArrowUpRight.ts
	const ArrowUpRight = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "7",
			y1: "17",
			x2: "17",
			y2: "7"
		}), polyline({ points: "7 7 17 7 17 17" }));
	};
	//#endregion
	//#region src/icons/ArrowUp.ts
	const ArrowUp = (props = {}) => {
		const { line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "19",
			x2: "12",
			y2: "5"
		}), polyline({ points: "5 12 12 5 19 12" }));
	};
	//#endregion
	//#region src/icons/AtSign.ts
	const AtSign = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "4"
		}), path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }));
	};
	//#endregion
	//#region src/icons/Award.ts
	const Award = (props = {}) => {
		const { circle, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "8",
			"r": "7"
		}), polyline({ points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }));
	};
	//#endregion
	//#region src/icons/BarChart2.ts
	const BarChart2 = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "18",
			y1: "20",
			x2: "18",
			y2: "10"
		}), line({
			x1: "12",
			y1: "20",
			x2: "12",
			y2: "4"
		}), line({
			x1: "6",
			y1: "20",
			x2: "6",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/BarChart.ts
	const BarChart = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "20",
			x2: "12",
			y2: "10"
		}), line({
			x1: "18",
			y1: "20",
			x2: "18",
			y2: "4"
		}), line({
			x1: "6",
			y1: "20",
			x2: "6",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/BatteryCharging.ts
	const BatteryCharging = (props = {}) => {
		const { path, line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }), line({
			x1: "23",
			y1: "13",
			x2: "23",
			y2: "11"
		}), polyline({ points: "11 6 7 12 13 12 9 18" }));
	};
	//#endregion
	//#region src/icons/Battery.ts
	const Battery = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "1",
			"y": "6",
			width: "18",
			height: "12",
			rx: "2",
			ry: "2"
		}), line({
			x1: "23",
			y1: "13",
			x2: "23",
			y2: "11"
		}));
	};
	//#endregion
	//#region src/icons/BellOff.ts
	const BellOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M13.73 21a2 2 0 0 1-3.46 0" }), path({ "d": "M18.63 13A17.89 17.89 0 0 1 18 8" }), path({ "d": "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" }), path({ "d": "M18 8a6 6 0 0 0-9.33-5" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Bell.ts
	const Bell = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), path({ "d": "M13.73 21a2 2 0 0 1-3.46 0" }));
	};
	//#endregion
	//#region src/icons/Bluetooth.ts
	const Bluetooth = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" }));
	};
	//#endregion
	//#region src/icons/Bold.ts
	const Bold = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }), path({ "d": "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }));
	};
	//#endregion
	//#region src/icons/BookOpen.ts
	const BookOpen = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }), path({ "d": "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }));
	};
	//#endregion
	//#region src/icons/Book.ts
	const Book = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }), path({ "d": "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }));
	};
	//#endregion
	//#region src/icons/Bookmark.ts
	const Bookmark = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }));
	};
	//#endregion
	//#region src/icons/Box.ts
	const Box = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), polyline({ points: "3.27 6.96 12 12.01 20.73 6.96" }), line({
			x1: "12",
			y1: "22.08",
			x2: "12",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Briefcase.ts
	const Briefcase = (props = {}) => {
		const { rect, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "7",
			width: "20",
			height: "14",
			rx: "2",
			ry: "2"
		}), path({ "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }));
	};
	//#endregion
	//#region src/icons/Calendar.ts
	const Calendar = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "4",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "16",
			y1: "2",
			x2: "16",
			y2: "6"
		}), line({
			x1: "8",
			y1: "2",
			x2: "8",
			y2: "6"
		}), line({
			x1: "3",
			y1: "10",
			x2: "21",
			y2: "10"
		}));
	};
	//#endregion
	//#region src/icons/CameraOff.ts
	const CameraOff = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}), path({ "d": "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" }));
	};
	//#endregion
	//#region src/icons/Camera.ts
	const Camera = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }), circle({
			cx: "12",
			cy: "13",
			"r": "4"
		}));
	};
	//#endregion
	//#region src/icons/Cast.ts
	const Cast = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }), line({
			x1: "2",
			y1: "20",
			x2: "2.01",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/CheckCircle.ts
	const CheckCircle = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), polyline({ points: "22 4 12 14.01 9 11.01" }));
	};
	//#endregion
	//#region src/icons/CheckSquare.ts
	const CheckSquare = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "9 11 12 14 22 4" }), path({ "d": "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }));
	};
	//#endregion
	//#region src/icons/Check.ts
	const Check = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "20 6 9 17 4 12" }));
	};
	//#endregion
	//#region src/icons/ChevronDown.ts
	const ChevronDown = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "6 9 12 15 18 9" }));
	};
	//#endregion
	//#region src/icons/ChevronLeft.ts
	const ChevronLeft = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "15 18 9 12 15 6" }));
	};
	//#endregion
	//#region src/icons/ChevronRight.ts
	const ChevronRight = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "9 18 15 12 9 6" }));
	};
	//#endregion
	//#region src/icons/ChevronUp.ts
	const ChevronUp = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "18 15 12 9 6 15" }));
	};
	//#endregion
	//#region src/icons/ChevronsDown.ts
	const ChevronsDown = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "7 13 12 18 17 13" }), polyline({ points: "7 6 12 11 17 6" }));
	};
	//#endregion
	//#region src/icons/ChevronsLeft.ts
	const ChevronsLeft = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "11 17 6 12 11 7" }), polyline({ points: "18 17 13 12 18 7" }));
	};
	//#endregion
	//#region src/icons/ChevronsRight.ts
	const ChevronsRight = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "13 17 18 12 13 7" }), polyline({ points: "6 17 11 12 6 7" }));
	};
	//#endregion
	//#region src/icons/ChevronsUp.ts
	const ChevronsUp = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "17 11 12 6 7 11" }), polyline({ points: "17 18 12 13 7 18" }));
	};
	//#endregion
	//#region src/icons/Chrome.ts
	const Chrome = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "4"
		}), line({
			x1: "21.17",
			y1: "8",
			x2: "12",
			y2: "8"
		}), line({
			x1: "3.95",
			y1: "6.06",
			x2: "8.54",
			y2: "14"
		}), line({
			x1: "10.88",
			y1: "21.94",
			x2: "15.46",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/Circle.ts
	const Circle = (props = {}) => {
		const { circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}));
	};
	//#endregion
	//#region src/icons/Clipboard.ts
	const Clipboard = (props = {}) => {
		const { path, rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), rect({
			"x": "8",
			"y": "2",
			width: "8",
			height: "4",
			rx: "1",
			ry: "1"
		}));
	};
	//#endregion
	//#region src/icons/Clock.ts
	const Clock = (props = {}) => {
		const { circle, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polyline({ points: "12 6 12 12 16 14" }));
	};
	//#endregion
	//#region src/icons/CloudDrizzle.ts
	const CloudDrizzle = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "8",
			y1: "19",
			x2: "8",
			y2: "21"
		}), line({
			x1: "8",
			y1: "13",
			x2: "8",
			y2: "15"
		}), line({
			x1: "16",
			y1: "19",
			x2: "16",
			y2: "21"
		}), line({
			x1: "16",
			y1: "13",
			x2: "16",
			y2: "15"
		}), line({
			x1: "12",
			y1: "21",
			x2: "12",
			y2: "23"
		}), line({
			x1: "12",
			y1: "15",
			x2: "12",
			y2: "17"
		}), path({ "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }));
	};
	//#endregion
	//#region src/icons/CloudLightning.ts
	const CloudLightning = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }), polyline({ points: "13 11 9 17 15 17 11 23" }));
	};
	//#endregion
	//#region src/icons/CloudOff.ts
	const CloudOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/CloudRain.ts
	const CloudRain = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "16",
			y1: "13",
			x2: "16",
			y2: "21"
		}), line({
			x1: "8",
			y1: "13",
			x2: "8",
			y2: "21"
		}), line({
			x1: "12",
			y1: "15",
			x2: "12",
			y2: "23"
		}), path({ "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }));
	};
	//#endregion
	//#region src/icons/CloudSnow.ts
	const CloudSnow = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }), line({
			x1: "8",
			y1: "16",
			x2: "8.01",
			y2: "16"
		}), line({
			x1: "8",
			y1: "20",
			x2: "8.01",
			y2: "20"
		}), line({
			x1: "12",
			y1: "18",
			x2: "12.01",
			y2: "18"
		}), line({
			x1: "12",
			y1: "22",
			x2: "12.01",
			y2: "22"
		}), line({
			x1: "16",
			y1: "16",
			x2: "16.01",
			y2: "16"
		}), line({
			x1: "16",
			y1: "20",
			x2: "16.01",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/Cloud.ts
	const Cloud = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }));
	};
	//#endregion
	//#region src/icons/Code.ts
	const Code = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "16 18 22 12 16 6" }), polyline({ points: "8 6 2 12 8 18" }));
	};
	//#endregion
	//#region src/icons/Codepen.ts
	const Codepen = (props = {}) => {
		const { polygon, line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }), line({
			x1: "12",
			y1: "22",
			x2: "12",
			y2: "15.5"
		}), polyline({ points: "22 8.5 12 15.5 2 8.5" }), polyline({ points: "2 15.5 12 8.5 22 15.5" }), line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "8.5"
		}));
	};
	//#endregion
	//#region src/icons/Codesandbox.ts
	const Codesandbox = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), polyline({ points: "7.5 4.21 12 6.81 16.5 4.21" }), polyline({ points: "7.5 19.79 7.5 14.6 3 12" }), polyline({ points: "21 12 16.5 14.6 16.5 19.79" }), polyline({ points: "3.27 6.96 12 12.01 20.73 6.96" }), line({
			x1: "12",
			y1: "22.08",
			x2: "12",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Coffee.ts
	const Coffee = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 8h1a4 4 0 0 1 0 8h-1" }), path({ "d": "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }), line({
			x1: "6",
			y1: "1",
			x2: "6",
			y2: "4"
		}), line({
			x1: "10",
			y1: "1",
			x2: "10",
			y2: "4"
		}), line({
			x1: "14",
			y1: "1",
			x2: "14",
			y2: "4"
		}));
	};
	//#endregion
	//#region src/icons/Columns.ts
	const Columns = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" }));
	};
	//#endregion
	//#region src/icons/Command.ts
	const Command = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }));
	};
	//#endregion
	//#region src/icons/Compass.ts
	const Compass = (props = {}) => {
		const { circle, polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polygon({ points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }));
	};
	//#endregion
	//#region src/icons/Copy.ts
	const Copy = (props = {}) => {
		const { rect, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "9",
			"y": "9",
			width: "13",
			height: "13",
			rx: "2",
			ry: "2"
		}), path({ "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }));
	};
	//#endregion
	//#region src/icons/CornerDownLeft.ts
	const CornerDownLeft = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "9 10 4 15 9 20" }), path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" }));
	};
	//#endregion
	//#region src/icons/CornerDownRight.ts
	const CornerDownRight = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "15 10 20 15 15 20" }), path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" }));
	};
	//#endregion
	//#region src/icons/CornerLeftDown.ts
	const CornerLeftDown = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "14 15 9 20 4 15" }), path({ "d": "M20 4h-7a4 4 0 0 0-4 4v12" }));
	};
	//#endregion
	//#region src/icons/CornerLeftUp.ts
	const CornerLeftUp = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "14 9 9 4 4 9" }), path({ "d": "M20 20h-7a4 4 0 0 1-4-4V4" }));
	};
	//#endregion
	//#region src/icons/CornerRightDown.ts
	const CornerRightDown = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "10 15 15 20 20 15" }), path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" }));
	};
	//#endregion
	//#region src/icons/CornerRightUp.ts
	const CornerRightUp = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "10 9 15 4 20 9" }), path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" }));
	};
	//#endregion
	//#region src/icons/CornerUpLeft.ts
	const CornerUpLeft = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "9 14 4 9 9 4" }), path({ "d": "M20 20v-7a4 4 0 0 0-4-4H4" }));
	};
	//#endregion
	//#region src/icons/CornerUpRight.ts
	const CornerUpRight = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "15 14 20 9 15 4" }), path({ "d": "M4 20v-7a4 4 0 0 1 4-4h12" }));
	};
	//#endregion
	//#region src/icons/Cpu.ts
	const Cpu = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "4",
			"y": "4",
			width: "16",
			height: "16",
			rx: "2",
			ry: "2"
		}), rect({
			"x": "9",
			"y": "9",
			width: "6",
			height: "6"
		}), line({
			x1: "9",
			y1: "1",
			x2: "9",
			y2: "4"
		}), line({
			x1: "15",
			y1: "1",
			x2: "15",
			y2: "4"
		}), line({
			x1: "9",
			y1: "20",
			x2: "9",
			y2: "23"
		}), line({
			x1: "15",
			y1: "20",
			x2: "15",
			y2: "23"
		}), line({
			x1: "20",
			y1: "9",
			x2: "23",
			y2: "9"
		}), line({
			x1: "20",
			y1: "14",
			x2: "23",
			y2: "14"
		}), line({
			x1: "1",
			y1: "9",
			x2: "4",
			y2: "9"
		}), line({
			x1: "1",
			y1: "14",
			x2: "4",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/CreditCard.ts
	const CreditCard = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "1",
			"y": "4",
			width: "22",
			height: "16",
			rx: "2",
			ry: "2"
		}), line({
			x1: "1",
			y1: "10",
			x2: "23",
			y2: "10"
		}));
	};
	//#endregion
	//#region src/icons/Crop.ts
	const Crop = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M6.13 1L6 16a2 2 0 0 0 2 2h15" }), path({ "d": "M1 6.13L16 6a2 2 0 0 1 2 2v15" }));
	};
	//#endregion
	//#region src/icons/Crosshair.ts
	const Crosshair = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "22",
			y1: "12",
			x2: "18",
			y2: "12"
		}), line({
			x1: "6",
			y1: "12",
			x2: "2",
			y2: "12"
		}), line({
			x1: "12",
			y1: "6",
			x2: "12",
			y2: "2"
		}), line({
			x1: "12",
			y1: "22",
			x2: "12",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Database.ts
	const Database = (props = {}) => {
		const { ellipse, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, ellipse({
			cx: "12",
			cy: "5",
			rx: "9",
			ry: "3"
		}), path({ "d": "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }), path({ "d": "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }));
	};
	//#endregion
	//#region src/icons/Delete.ts
	const Delete = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }), line({
			x1: "18",
			y1: "9",
			x2: "12",
			y2: "15"
		}), line({
			x1: "12",
			y1: "9",
			x2: "18",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/Disc.ts
	const Disc = (props = {}) => {
		const { circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/DivideCircle.ts
	const DivideCircle = (props = {}) => {
		const { line, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}), line({
			x1: "12",
			y1: "16",
			x2: "12",
			y2: "16"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "8"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}));
	};
	//#endregion
	//#region src/icons/DivideSquare.ts
	const DivideSquare = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}), line({
			x1: "12",
			y1: "16",
			x2: "12",
			y2: "16"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "8"
		}));
	};
	//#endregion
	//#region src/icons/Divide.ts
	const Divide = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "6",
			"r": "2"
		}), line({
			x1: "5",
			y1: "12",
			x2: "19",
			y2: "12"
		}), circle({
			cx: "12",
			cy: "18",
			"r": "2"
		}));
	};
	//#endregion
	//#region src/icons/DollarSign.ts
	const DollarSign = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "1",
			x2: "12",
			y2: "23"
		}), path({ "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }));
	};
	//#endregion
	//#region src/icons/DownloadCloud.ts
	const DownloadCloud = (props = {}) => {
		const { polyline, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "8 17 12 21 16 17" }), line({
			x1: "12",
			y1: "12",
			x2: "12",
			y2: "21"
		}), path({ "d": "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" }));
	};
	//#endregion
	//#region src/icons/Download.ts
	const Download = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), polyline({ points: "7 10 12 15 17 10" }), line({
			x1: "12",
			y1: "15",
			x2: "12",
			y2: "3"
		}));
	};
	//#endregion
	//#region src/icons/Dribbble.ts
	const Dribbble = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), path({ "d": "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" }));
	};
	//#endregion
	//#region src/icons/Droplet.ts
	const Droplet = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }));
	};
	//#endregion
	//#region src/icons/Edit2.ts
	const Edit2 = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }));
	};
	//#endregion
	//#region src/icons/Edit3.ts
	const Edit3 = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 20h9" }), path({ "d": "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" }));
	};
	//#endregion
	//#region src/icons/Edit.ts
	const Edit = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), path({ "d": "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }));
	};
	//#endregion
	//#region src/icons/ExternalLink.ts
	const ExternalLink = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), polyline({ points: "15 3 21 3 21 9" }), line({
			x1: "10",
			y1: "14",
			x2: "21",
			y2: "3"
		}));
	};
	//#endregion
	//#region src/icons/EyeOff.ts
	const EyeOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Eye.ts
	const Eye = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), circle({
			cx: "12",
			cy: "12",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/Facebook.ts
	const Facebook = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }));
	};
	//#endregion
	//#region src/icons/FastForward.ts
	const FastForward = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "13 19 22 12 13 5 13 19" }), polygon({ points: "2 19 11 12 2 5 2 19" }));
	};
	//#endregion
	//#region src/icons/Feather.ts
	const Feather = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }), line({
			x1: "16",
			y1: "8",
			x2: "2",
			y2: "22"
		}), line({
			x1: "17.5",
			y1: "15",
			x2: "9",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/Figma.ts
	const Figma = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }), path({ "d": "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }), path({ "d": "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }), path({ "d": "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }), path({ "d": "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }));
	};
	//#endregion
	//#region src/icons/FileMinus.ts
	const FileMinus = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), polyline({ points: "14 2 14 8 20 8" }), line({
			x1: "9",
			y1: "15",
			x2: "15",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/FilePlus.ts
	const FilePlus = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), polyline({ points: "14 2 14 8 20 8" }), line({
			x1: "12",
			y1: "18",
			x2: "12",
			y2: "12"
		}), line({
			x1: "9",
			y1: "15",
			x2: "15",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/FileText.ts
	const FileText = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), polyline({ points: "14 2 14 8 20 8" }), line({
			x1: "16",
			y1: "13",
			x2: "8",
			y2: "13"
		}), line({
			x1: "16",
			y1: "17",
			x2: "8",
			y2: "17"
		}), polyline({ points: "10 9 9 9 8 9" }));
	};
	//#endregion
	//#region src/icons/File.ts
	const File = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }), polyline({ points: "13 2 13 9 20 9" }));
	};
	//#endregion
	//#region src/icons/Film.ts
	const Film = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "2",
			width: "20",
			height: "20",
			rx: "2.18",
			ry: "2.18"
		}), line({
			x1: "7",
			y1: "2",
			x2: "7",
			y2: "22"
		}), line({
			x1: "17",
			y1: "2",
			x2: "17",
			y2: "22"
		}), line({
			x1: "2",
			y1: "12",
			x2: "22",
			y2: "12"
		}), line({
			x1: "2",
			y1: "7",
			x2: "7",
			y2: "7"
		}), line({
			x1: "2",
			y1: "17",
			x2: "7",
			y2: "17"
		}), line({
			x1: "17",
			y1: "17",
			x2: "22",
			y2: "17"
		}), line({
			x1: "17",
			y1: "7",
			x2: "22",
			y2: "7"
		}));
	};
	//#endregion
	//#region src/icons/Filter.ts
	const Filter = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }));
	};
	//#endregion
	//#region src/icons/Flag.ts
	const Flag = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }), line({
			x1: "4",
			y1: "22",
			x2: "4",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/FolderMinus.ts
	const FolderMinus = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }), line({
			x1: "9",
			y1: "14",
			x2: "15",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/FolderPlus.ts
	const FolderPlus = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }), line({
			x1: "12",
			y1: "11",
			x2: "12",
			y2: "17"
		}), line({
			x1: "9",
			y1: "14",
			x2: "15",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/Folder.ts
	const Folder = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }));
	};
	//#endregion
	//#region src/icons/Framer.ts
	const Framer = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" }));
	};
	//#endregion
	//#region src/icons/Frown.ts
	const Frown = (props = {}) => {
		const { circle, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }), line({
			x1: "9",
			y1: "9",
			x2: "9.01",
			y2: "9"
		}), line({
			x1: "15",
			y1: "9",
			x2: "15.01",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/Gift.ts
	const Gift = (props = {}) => {
		const { polyline, rect, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "20 12 20 22 4 22 4 12" }), rect({
			"x": "2",
			"y": "7",
			width: "20",
			height: "5"
		}), line({
			x1: "12",
			y1: "22",
			x2: "12",
			y2: "7"
		}), path({ "d": "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }), path({ "d": "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" }));
	};
	//#endregion
	//#region src/icons/GitBranch.ts
	const GitBranch = (props = {}) => {
		const { line, circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "6",
			y1: "3",
			x2: "6",
			y2: "15"
		}), circle({
			cx: "18",
			cy: "6",
			"r": "3"
		}), circle({
			cx: "6",
			cy: "18",
			"r": "3"
		}), path({ "d": "M18 9a9 9 0 0 1-9 9" }));
	};
	//#endregion
	//#region src/icons/GitCommit.ts
	const GitCommit = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "4"
		}), line({
			x1: "1.05",
			y1: "12",
			x2: "7",
			y2: "12"
		}), line({
			x1: "17.01",
			y1: "12",
			x2: "22.96",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/GitMerge.ts
	const GitMerge = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "18",
			cy: "18",
			"r": "3"
		}), circle({
			cx: "6",
			cy: "6",
			"r": "3"
		}), path({ "d": "M6 21V9a9 9 0 0 0 9 9" }));
	};
	//#endregion
	//#region src/icons/GitPullRequest.ts
	const GitPullRequest = (props = {}) => {
		const { circle, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "18",
			cy: "18",
			"r": "3"
		}), circle({
			cx: "6",
			cy: "6",
			"r": "3"
		}), path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }), line({
			x1: "6",
			y1: "9",
			x2: "6",
			y2: "21"
		}));
	};
	//#endregion
	//#region src/icons/Github.ts
	const Github = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }));
	};
	//#endregion
	//#region src/icons/Gitlab.ts
	const Gitlab = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }));
	};
	//#endregion
	//#region src/icons/Globe.ts
	const Globe = (props = {}) => {
		const { circle, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "2",
			y1: "12",
			x2: "22",
			y2: "12"
		}), path({ "d": "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }));
	};
	//#endregion
	//#region src/icons/Grid.ts
	const Grid = (props = {}) => {
		const { rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "7",
			height: "7"
		}), rect({
			"x": "14",
			"y": "3",
			width: "7",
			height: "7"
		}), rect({
			"x": "14",
			"y": "14",
			width: "7",
			height: "7"
		}), rect({
			"x": "3",
			"y": "14",
			width: "7",
			height: "7"
		}));
	};
	//#endregion
	//#region src/icons/HardDrive.ts
	const HardDrive = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "22",
			y1: "12",
			x2: "2",
			y2: "12"
		}), path({ "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }), line({
			x1: "6",
			y1: "16",
			x2: "6.01",
			y2: "16"
		}), line({
			x1: "10",
			y1: "16",
			x2: "10.01",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/Hash.ts
	const Hash = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "4",
			y1: "9",
			x2: "20",
			y2: "9"
		}), line({
			x1: "4",
			y1: "15",
			x2: "20",
			y2: "15"
		}), line({
			x1: "10",
			y1: "3",
			x2: "8",
			y2: "21"
		}), line({
			x1: "16",
			y1: "3",
			x2: "14",
			y2: "21"
		}));
	};
	//#endregion
	//#region src/icons/Headphones.ts
	const Headphones = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M3 18v-6a9 9 0 0 1 18 0v6" }), path({ "d": "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }));
	};
	//#endregion
	//#region src/icons/Heart.ts
	const Heart = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }));
	};
	//#endregion
	//#region src/icons/HelpCircle.ts
	const HelpCircle = (props = {}) => {
		const { circle, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), line({
			x1: "12",
			y1: "17",
			x2: "12.01",
			y2: "17"
		}));
	};
	//#endregion
	//#region src/icons/Hexagon.ts
	const Hexagon = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }));
	};
	//#endregion
	//#region src/icons/Home.ts
	const Home = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), polyline({ points: "9 22 9 12 15 12 15 22" }));
	};
	//#endregion
	//#region src/icons/Image.ts
	const Image = (props = {}) => {
		const { rect, circle, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), circle({
			cx: "8.5",
			cy: "8.5",
			"r": "1.5"
		}), polyline({ points: "21 15 16 10 5 21" }));
	};
	//#endregion
	//#region src/icons/Inbox.ts
	const Inbox = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "22 12 16 12 14 15 10 15 8 12 2 12" }), path({ "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }));
	};
	//#endregion
	//#region src/icons/Info.ts
	const Info = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "12",
			y1: "16",
			x2: "12",
			y2: "12"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12.01",
			y2: "8"
		}));
	};
	//#endregion
	//#region src/icons/Instagram.ts
	const Instagram = (props = {}) => {
		const { rect, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "2",
			width: "20",
			height: "20",
			rx: "5",
			ry: "5"
		}), path({ "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }), line({
			x1: "17.5",
			y1: "6.5",
			x2: "17.51",
			y2: "6.5"
		}));
	};
	//#endregion
	//#region src/icons/Italic.ts
	const Italic = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "19",
			y1: "4",
			x2: "10",
			y2: "4"
		}), line({
			x1: "14",
			y1: "20",
			x2: "5",
			y2: "20"
		}), line({
			x1: "15",
			y1: "4",
			x2: "9",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/Key.ts
	const Key = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }));
	};
	//#endregion
	//#region src/icons/Layers.ts
	const Layers = (props = {}) => {
		const { polygon, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "12 2 2 7 12 12 22 7 12 2" }), polyline({ points: "2 17 12 22 22 17" }), polyline({ points: "2 12 12 17 22 12" }));
	};
	//#endregion
	//#region src/icons/Layout.ts
	const Layout = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "3",
			y1: "9",
			x2: "21",
			y2: "9"
		}), line({
			x1: "9",
			y1: "21",
			x2: "9",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/LifeBuoy.ts
	const LifeBuoy = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "4"
		}), line({
			x1: "4.93",
			y1: "4.93",
			x2: "9.17",
			y2: "9.17"
		}), line({
			x1: "14.83",
			y1: "14.83",
			x2: "19.07",
			y2: "19.07"
		}), line({
			x1: "14.83",
			y1: "9.17",
			x2: "19.07",
			y2: "4.93"
		}), line({
			x1: "14.83",
			y1: "9.17",
			x2: "18.36",
			y2: "5.64"
		}), line({
			x1: "4.93",
			y1: "19.07",
			x2: "9.17",
			y2: "14.83"
		}));
	};
	//#endregion
	//#region src/icons/Link2.ts
	const Link2 = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Link.ts
	const Link = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), path({ "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }));
	};
	//#endregion
	//#region src/icons/Linkedin.ts
	const Linkedin = (props = {}) => {
		const { path, rect, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }), rect({
			"x": "2",
			"y": "9",
			width: "4",
			height: "12"
		}), circle({
			cx: "4",
			cy: "4",
			"r": "2"
		}));
	};
	//#endregion
	//#region src/icons/List.ts
	const List = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "8",
			y1: "6",
			x2: "21",
			y2: "6"
		}), line({
			x1: "8",
			y1: "12",
			x2: "21",
			y2: "12"
		}), line({
			x1: "8",
			y1: "18",
			x2: "21",
			y2: "18"
		}), line({
			x1: "3",
			y1: "6",
			x2: "3.01",
			y2: "6"
		}), line({
			x1: "3",
			y1: "12",
			x2: "3.01",
			y2: "12"
		}), line({
			x1: "3",
			y1: "18",
			x2: "3.01",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Loader.ts
	const Loader = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "6"
		}), line({
			x1: "12",
			y1: "18",
			x2: "12",
			y2: "22"
		}), line({
			x1: "4.93",
			y1: "4.93",
			x2: "7.76",
			y2: "7.76"
		}), line({
			x1: "16.24",
			y1: "16.24",
			x2: "19.07",
			y2: "19.07"
		}), line({
			x1: "2",
			y1: "12",
			x2: "6",
			y2: "12"
		}), line({
			x1: "18",
			y1: "12",
			x2: "22",
			y2: "12"
		}), line({
			x1: "4.93",
			y1: "19.07",
			x2: "7.76",
			y2: "16.24"
		}), line({
			x1: "16.24",
			y1: "7.76",
			x2: "19.07",
			y2: "4.93"
		}));
	};
	//#endregion
	//#region src/icons/Lock.ts
	const Lock = (props = {}) => {
		const { rect, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "11",
			width: "18",
			height: "11",
			rx: "2",
			ry: "2"
		}), path({ "d": "M7 11V7a5 5 0 0 1 10 0v4" }));
	};
	//#endregion
	//#region src/icons/LogIn.ts
	const LogIn = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }), polyline({ points: "10 17 15 12 10 7" }), line({
			x1: "15",
			y1: "12",
			x2: "3",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/LogOut.ts
	const LogOut = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), polyline({ points: "16 17 21 12 16 7" }), line({
			x1: "21",
			y1: "12",
			x2: "9",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Mail.ts
	const Mail = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), polyline({ points: "22,6 12,13 2,6" }));
	};
	//#endregion
	//#region src/icons/MapPin.ts
	const MapPin = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), circle({
			cx: "12",
			cy: "10",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/Map.ts
	const Map = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }), line({
			x1: "8",
			y1: "2",
			x2: "8",
			y2: "18"
		}), line({
			x1: "16",
			y1: "6",
			x2: "16",
			y2: "22"
		}));
	};
	//#endregion
	//#region src/icons/Maximize2.ts
	const Maximize2 = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "15 3 21 3 21 9" }), polyline({ points: "9 21 3 21 3 15" }), line({
			x1: "21",
			y1: "3",
			x2: "14",
			y2: "10"
		}), line({
			x1: "3",
			y1: "21",
			x2: "10",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/Maximize.ts
	const Maximize = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }));
	};
	//#endregion
	//#region src/icons/Meh.ts
	const Meh = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "8",
			y1: "15",
			x2: "16",
			y2: "15"
		}), line({
			x1: "9",
			y1: "9",
			x2: "9.01",
			y2: "9"
		}), line({
			x1: "15",
			y1: "9",
			x2: "15.01",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/Menu.ts
	const Menu = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "3",
			y1: "12",
			x2: "21",
			y2: "12"
		}), line({
			x1: "3",
			y1: "6",
			x2: "21",
			y2: "6"
		}), line({
			x1: "3",
			y1: "18",
			x2: "21",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/MessageCircle.ts
	const MessageCircle = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }));
	};
	//#endregion
	//#region src/icons/MessageSquare.ts
	const MessageSquare = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }));
	};
	//#endregion
	//#region src/icons/MicOff.ts
	const MicOff = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}), path({ "d": "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }), path({ "d": "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }), line({
			x1: "12",
			y1: "19",
			x2: "12",
			y2: "23"
		}), line({
			x1: "8",
			y1: "23",
			x2: "16",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Mic.ts
	const Mic = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }), path({ "d": "M19 10v2a7 7 0 0 1-14 0v-2" }), line({
			x1: "12",
			y1: "19",
			x2: "12",
			y2: "23"
		}), line({
			x1: "8",
			y1: "23",
			x2: "16",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Minimize2.ts
	const Minimize2 = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "4 14 10 14 10 20" }), polyline({ points: "20 10 14 10 14 4" }), line({
			x1: "14",
			y1: "10",
			x2: "21",
			y2: "3"
		}), line({
			x1: "3",
			y1: "21",
			x2: "10",
			y2: "14"
		}));
	};
	//#endregion
	//#region src/icons/Minimize.ts
	const Minimize = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }));
	};
	//#endregion
	//#region src/icons/MinusCircle.ts
	const MinusCircle = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/MinusSquare.ts
	const MinusSquare = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Minus.ts
	const Minus = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "5",
			y1: "12",
			x2: "19",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Monitor.ts
	const Monitor = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "3",
			width: "20",
			height: "14",
			rx: "2",
			ry: "2"
		}), line({
			x1: "8",
			y1: "21",
			x2: "16",
			y2: "21"
		}), line({
			x1: "12",
			y1: "17",
			x2: "12",
			y2: "21"
		}));
	};
	//#endregion
	//#region src/icons/Moon.ts
	const Moon = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }));
	};
	//#endregion
	//#region src/icons/MoreHorizontal.ts
	const MoreHorizontal = (props = {}) => {
		const { circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "1"
		}), circle({
			cx: "19",
			cy: "12",
			"r": "1"
		}), circle({
			cx: "5",
			cy: "12",
			"r": "1"
		}));
	};
	//#endregion
	//#region src/icons/MoreVertical.ts
	const MoreVertical = (props = {}) => {
		const { circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "1"
		}), circle({
			cx: "12",
			cy: "5",
			"r": "1"
		}), circle({
			cx: "12",
			cy: "19",
			"r": "1"
		}));
	};
	//#endregion
	//#region src/icons/MousePointer.ts
	const MousePointer = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }), path({ "d": "M13 13l6 6" }));
	};
	//#endregion
	//#region src/icons/Move.ts
	const Move = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "5 9 2 12 5 15" }), polyline({ points: "9 5 12 2 15 5" }), polyline({ points: "15 19 12 22 9 19" }), polyline({ points: "19 9 22 12 19 15" }), line({
			x1: "2",
			y1: "12",
			x2: "22",
			y2: "12"
		}), line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "22"
		}));
	};
	//#endregion
	//#region src/icons/Music.ts
	const Music = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M9 18V5l12-2v13" }), circle({
			cx: "6",
			cy: "18",
			"r": "3"
		}), circle({
			cx: "18",
			cy: "16",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/Navigation2.ts
	const Navigation2 = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "12 2 19 21 12 17 5 21 12 2" }));
	};
	//#endregion
	//#region src/icons/Navigation.ts
	const Navigation = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "3 11 22 2 13 21 11 13 3 11" }));
	};
	//#endregion
	//#region src/icons/Octagon.ts
	const Octagon = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }));
	};
	//#endregion
	//#region src/icons/Package.ts
	const Package = (props = {}) => {
		const { line, path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "16.5",
			y1: "9.4",
			x2: "7.5",
			y2: "4.21"
		}), path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), polyline({ points: "3.27 6.96 12 12.01 20.73 6.96" }), line({
			x1: "12",
			y1: "22.08",
			x2: "12",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Paperclip.ts
	const Paperclip = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }));
	};
	//#endregion
	//#region src/icons/PauseCircle.ts
	const PauseCircle = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "10",
			y1: "15",
			x2: "10",
			y2: "9"
		}), line({
			x1: "14",
			y1: "15",
			x2: "14",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/Pause.ts
	const Pause = (props = {}) => {
		const { rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "6",
			"y": "4",
			width: "4",
			height: "16"
		}), rect({
			"x": "14",
			"y": "4",
			width: "4",
			height: "16"
		}));
	};
	//#endregion
	//#region src/icons/PenTool.ts
	const PenTool = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 19l7-7 3 3-7 7-3-3z" }), path({ "d": "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }), path({ "d": "M2 2l7.586 7.586" }), circle({
			cx: "11",
			cy: "11",
			"r": "2"
		}));
	};
	//#endregion
	//#region src/icons/Percent.ts
	const Percent = (props = {}) => {
		const { line, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "19",
			y1: "5",
			x2: "5",
			y2: "19"
		}), circle({
			cx: "6.5",
			cy: "6.5",
			"r": "2.5"
		}), circle({
			cx: "17.5",
			cy: "17.5",
			"r": "2.5"
		}));
	};
	//#endregion
	//#region src/icons/PhoneCall.ts
	const PhoneCall = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/PhoneForwarded.ts
	const PhoneForwarded = (props = {}) => {
		const { polyline, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "19 1 23 5 19 9" }), line({
			x1: "15",
			y1: "5",
			x2: "23",
			y2: "5"
		}), path({ "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/PhoneIncoming.ts
	const PhoneIncoming = (props = {}) => {
		const { polyline, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "16 2 16 8 22 8" }), line({
			x1: "23",
			y1: "1",
			x2: "16",
			y2: "8"
		}), path({ "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/PhoneMissed.ts
	const PhoneMissed = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "23",
			y1: "1",
			x2: "17",
			y2: "7"
		}), line({
			x1: "17",
			y1: "1",
			x2: "23",
			y2: "7"
		}), path({ "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/PhoneOff.ts
	const PhoneOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }), line({
			x1: "23",
			y1: "1",
			x2: "1",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/PhoneOutgoing.ts
	const PhoneOutgoing = (props = {}) => {
		const { polyline, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "23 7 23 1 17 1" }), line({
			x1: "16",
			y1: "8",
			x2: "23",
			y2: "1"
		}), path({ "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/Phone.ts
	const Phone = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }));
	};
	//#endregion
	//#region src/icons/PieChart.ts
	const PieChart = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }), path({ "d": "M22 12A10 10 0 0 0 12 2v10z" }));
	};
	//#endregion
	//#region src/icons/PlayCircle.ts
	const PlayCircle = (props = {}) => {
		const { circle, polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), polygon({ points: "10 8 16 12 10 16 10 8" }));
	};
	//#endregion
	//#region src/icons/Play.ts
	const Play = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "5 3 19 12 5 21 5 3" }));
	};
	//#endregion
	//#region src/icons/PlusCircle.ts
	const PlusCircle = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "16"
		}), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/PlusSquare.ts
	const PlusSquare = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "16"
		}), line({
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Plus.ts
	const Plus = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "12",
			y1: "5",
			x2: "12",
			y2: "19"
		}), line({
			x1: "5",
			y1: "12",
			x2: "19",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Pocket.ts
	const Pocket = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }), polyline({ points: "8 10 12 14 16 10" }));
	};
	//#endregion
	//#region src/icons/Power.ts
	const Power = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M18.36 6.64a9 9 0 1 1-12.73 0" }), line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Printer.ts
	const Printer = (props = {}) => {
		const { polyline, path, rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "6 9 6 2 18 2 18 9" }), path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }), rect({
			"x": "6",
			"y": "14",
			width: "12",
			height: "8"
		}));
	};
	//#endregion
	//#region src/icons/Radio.ts
	const Radio = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "2"
		}), path({ "d": "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" }));
	};
	//#endregion
	//#region src/icons/RefreshCcw.ts
	const RefreshCcw = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "1 4 1 10 7 10" }), polyline({ points: "23 20 23 14 17 14" }), path({ "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" }));
	};
	//#endregion
	//#region src/icons/RefreshCw.ts
	const RefreshCw = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "23 4 23 10 17 10" }), polyline({ points: "1 20 1 14 7 14" }), path({ "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }));
	};
	//#endregion
	//#region src/icons/Repeat.ts
	const Repeat = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "17 1 21 5 17 9" }), path({ "d": "M3 11V9a4 4 0 0 1 4-4h14" }), polyline({ points: "7 23 3 19 7 15" }), path({ "d": "M21 13v2a4 4 0 0 1-4 4H3" }));
	};
	//#endregion
	//#region src/icons/Rewind.ts
	const Rewind = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "11 19 2 12 11 5 11 19" }), polygon({ points: "22 19 13 12 22 5 22 19" }));
	};
	//#endregion
	//#region src/icons/RotateCcw.ts
	const RotateCcw = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "1 4 1 10 7 10" }), path({ "d": "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }));
	};
	//#endregion
	//#region src/icons/RotateCw.ts
	const RotateCw = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "23 4 23 10 17 10" }), path({ "d": "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }));
	};
	//#endregion
	//#region src/icons/Rss.ts
	const Rss = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 11a9 9 0 0 1 9 9" }), path({ "d": "M4 4a16 16 0 0 1 16 16" }), circle({
			cx: "5",
			cy: "19",
			"r": "1"
		}));
	};
	//#endregion
	//#region src/icons/Save.ts
	const Save = (props = {}) => {
		const { path, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), polyline({ points: "17 21 17 13 7 13 7 21" }), polyline({ points: "7 3 7 8 15 8" }));
	};
	//#endregion
	//#region src/icons/Scissors.ts
	const Scissors = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "6",
			cy: "6",
			"r": "3"
		}), circle({
			cx: "6",
			cy: "18",
			"r": "3"
		}), line({
			x1: "20",
			y1: "4",
			x2: "8.12",
			y2: "15.88"
		}), line({
			x1: "14.47",
			y1: "14.48",
			x2: "20",
			y2: "20"
		}), line({
			x1: "8.12",
			y1: "8.12",
			x2: "12",
			y2: "12"
		}));
	};
	//#endregion
	//#region src/icons/Search.ts
	const Search = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "11",
			cy: "11",
			"r": "8"
		}), line({
			x1: "21",
			y1: "21",
			x2: "16.65",
			y2: "16.65"
		}));
	};
	//#endregion
	//#region src/icons/Send.ts
	const Send = (props = {}) => {
		const { line, polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "22",
			y1: "2",
			x2: "11",
			y2: "13"
		}), polygon({ points: "22 2 15 22 11 13 2 9 22 2" }));
	};
	//#endregion
	//#region src/icons/Server.ts
	const Server = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "2",
			width: "20",
			height: "8",
			rx: "2",
			ry: "2"
		}), rect({
			"x": "2",
			"y": "14",
			width: "20",
			height: "8",
			rx: "2",
			ry: "2"
		}), line({
			x1: "6",
			y1: "6",
			x2: "6.01",
			y2: "6"
		}), line({
			x1: "6",
			y1: "18",
			x2: "6.01",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Settings.ts
	const Settings = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "3"
		}), path({ "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }));
	};
	//#endregion
	//#region src/icons/Share2.ts
	const Share2 = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "18",
			cy: "5",
			"r": "3"
		}), circle({
			cx: "6",
			cy: "12",
			"r": "3"
		}), circle({
			cx: "18",
			cy: "19",
			"r": "3"
		}), line({
			x1: "8.59",
			y1: "13.51",
			x2: "15.42",
			y2: "17.49"
		}), line({
			x1: "15.41",
			y1: "6.51",
			x2: "8.59",
			y2: "10.49"
		}));
	};
	//#endregion
	//#region src/icons/Share.ts
	const Share = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }), polyline({ points: "16 6 12 2 8 6" }), line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/ShieldOff.ts
	const ShieldOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" }), path({ "d": "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Shield.ts
	const Shield = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }));
	};
	//#endregion
	//#region src/icons/ShoppingBag.ts
	const ShoppingBag = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), line({
			x1: "3",
			y1: "6",
			x2: "21",
			y2: "6"
		}), path({ "d": "M16 10a4 4 0 0 1-8 0" }));
	};
	//#endregion
	//#region src/icons/ShoppingCart.ts
	const ShoppingCart = (props = {}) => {
		const { circle, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "9",
			cy: "21",
			"r": "1"
		}), circle({
			cx: "20",
			cy: "21",
			"r": "1"
		}), path({ "d": "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" }));
	};
	//#endregion
	//#region src/icons/Shuffle.ts
	const Shuffle = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "16 3 21 3 21 8" }), line({
			x1: "4",
			y1: "20",
			x2: "21",
			y2: "3"
		}), polyline({ points: "21 16 21 21 16 21" }), line({
			x1: "15",
			y1: "15",
			x2: "21",
			y2: "21"
		}), line({
			x1: "4",
			y1: "4",
			x2: "9",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/Sidebar.ts
	const Sidebar = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "9",
			y1: "3",
			x2: "9",
			y2: "21"
		}));
	};
	//#endregion
	//#region src/icons/SkipBack.ts
	const SkipBack = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "19 20 9 12 19 4 19 20" }), line({
			x1: "5",
			y1: "19",
			x2: "5",
			y2: "5"
		}));
	};
	//#endregion
	//#region src/icons/SkipForward.ts
	const SkipForward = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "5 4 15 12 5 20 5 4" }), line({
			x1: "19",
			y1: "5",
			x2: "19",
			y2: "19"
		}));
	};
	//#endregion
	//#region src/icons/Slack.ts
	const Slack = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" }), path({ "d": "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }), path({ "d": "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" }), path({ "d": "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" }), path({ "d": "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" }), path({ "d": "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }), path({ "d": "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" }), path({ "d": "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" }));
	};
	//#endregion
	//#region src/icons/Slash.ts
	const Slash = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "4.93",
			y1: "4.93",
			x2: "19.07",
			y2: "19.07"
		}));
	};
	//#endregion
	//#region src/icons/Sliders.ts
	const Sliders = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "4",
			y1: "21",
			x2: "4",
			y2: "14"
		}), line({
			x1: "4",
			y1: "10",
			x2: "4",
			y2: "3"
		}), line({
			x1: "12",
			y1: "21",
			x2: "12",
			y2: "12"
		}), line({
			x1: "12",
			y1: "8",
			x2: "12",
			y2: "3"
		}), line({
			x1: "20",
			y1: "21",
			x2: "20",
			y2: "16"
		}), line({
			x1: "20",
			y1: "12",
			x2: "20",
			y2: "3"
		}), line({
			x1: "1",
			y1: "14",
			x2: "7",
			y2: "14"
		}), line({
			x1: "9",
			y1: "8",
			x2: "15",
			y2: "8"
		}), line({
			x1: "17",
			y1: "16",
			x2: "23",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/Smartphone.ts
	const Smartphone = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "5",
			"y": "2",
			width: "14",
			height: "20",
			rx: "2",
			ry: "2"
		}), line({
			x1: "12",
			y1: "18",
			x2: "12.01",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Smile.ts
	const Smile = (props = {}) => {
		const { circle, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }), line({
			x1: "9",
			y1: "9",
			x2: "9.01",
			y2: "9"
		}), line({
			x1: "15",
			y1: "9",
			x2: "15.01",
			y2: "9"
		}));
	};
	//#endregion
	//#region src/icons/Speaker.ts
	const Speaker = (props = {}) => {
		const { rect, circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "4",
			"y": "2",
			width: "16",
			height: "20",
			rx: "2",
			ry: "2"
		}), circle({
			cx: "12",
			cy: "14",
			"r": "4"
		}), line({
			x1: "12",
			y1: "6",
			x2: "12.01",
			y2: "6"
		}));
	};
	//#endregion
	//#region src/icons/Square.ts
	const Square = (props = {}) => {
		const { rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}));
	};
	//#endregion
	//#region src/icons/Star.ts
	const Star = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
	};
	//#endregion
	//#region src/icons/StopCircle.ts
	const StopCircle = (props = {}) => {
		const { circle, rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), rect({
			"x": "9",
			"y": "9",
			width: "6",
			height: "6"
		}));
	};
	//#endregion
	//#region src/icons/Sun.ts
	const Sun = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "5"
		}), line({
			x1: "12",
			y1: "1",
			x2: "12",
			y2: "3"
		}), line({
			x1: "12",
			y1: "21",
			x2: "12",
			y2: "23"
		}), line({
			x1: "4.22",
			y1: "4.22",
			x2: "5.64",
			y2: "5.64"
		}), line({
			x1: "18.36",
			y1: "18.36",
			x2: "19.78",
			y2: "19.78"
		}), line({
			x1: "1",
			y1: "12",
			x2: "3",
			y2: "12"
		}), line({
			x1: "21",
			y1: "12",
			x2: "23",
			y2: "12"
		}), line({
			x1: "4.22",
			y1: "19.78",
			x2: "5.64",
			y2: "18.36"
		}), line({
			x1: "18.36",
			y1: "5.64",
			x2: "19.78",
			y2: "4.22"
		}));
	};
	//#endregion
	//#region src/icons/Sunrise.ts
	const Sunrise = (props = {}) => {
		const { path, line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M17 18a5 5 0 0 0-10 0" }), line({
			x1: "12",
			y1: "2",
			x2: "12",
			y2: "9"
		}), line({
			x1: "4.22",
			y1: "10.22",
			x2: "5.64",
			y2: "11.64"
		}), line({
			x1: "1",
			y1: "18",
			x2: "3",
			y2: "18"
		}), line({
			x1: "21",
			y1: "18",
			x2: "23",
			y2: "18"
		}), line({
			x1: "18.36",
			y1: "11.64",
			x2: "19.78",
			y2: "10.22"
		}), line({
			x1: "23",
			y1: "22",
			x2: "1",
			y2: "22"
		}), polyline({ points: "8 6 12 2 16 6" }));
	};
	//#endregion
	//#region src/icons/Sunset.ts
	const Sunset = (props = {}) => {
		const { path, line, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M17 18a5 5 0 0 0-10 0" }), line({
			x1: "12",
			y1: "9",
			x2: "12",
			y2: "2"
		}), line({
			x1: "4.22",
			y1: "10.22",
			x2: "5.64",
			y2: "11.64"
		}), line({
			x1: "1",
			y1: "18",
			x2: "3",
			y2: "18"
		}), line({
			x1: "21",
			y1: "18",
			x2: "23",
			y2: "18"
		}), line({
			x1: "18.36",
			y1: "11.64",
			x2: "19.78",
			y2: "10.22"
		}), line({
			x1: "23",
			y1: "22",
			x2: "1",
			y2: "22"
		}), polyline({ points: "16 5 12 9 8 5" }));
	};
	//#endregion
	//#region src/icons/Table.ts
	const Table = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }));
	};
	//#endregion
	//#region src/icons/Tablet.ts
	const Tablet = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "4",
			"y": "2",
			width: "16",
			height: "20",
			rx: "2",
			ry: "2"
		}), line({
			x1: "12",
			y1: "18",
			x2: "12.01",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Tag.ts
	const Tag = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), line({
			x1: "7",
			y1: "7",
			x2: "7.01",
			y2: "7"
		}));
	};
	//#endregion
	//#region src/icons/Target.ts
	const Target = (props = {}) => {
		const { circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "6"
		}), circle({
			cx: "12",
			cy: "12",
			"r": "2"
		}));
	};
	//#endregion
	//#region src/icons/Terminal.ts
	const Terminal = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "4 17 10 11 4 5" }), line({
			x1: "12",
			y1: "19",
			x2: "20",
			y2: "19"
		}));
	};
	//#endregion
	//#region src/icons/Thermometer.ts
	const Thermometer = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }));
	};
	//#endregion
	//#region src/icons/ThumbsDown.ts
	const ThumbsDown = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }));
	};
	//#endregion
	//#region src/icons/ThumbsUp.ts
	const ThumbsUp = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }));
	};
	//#endregion
	//#region src/icons/ToggleLeft.ts
	const ToggleLeft = (props = {}) => {
		const { rect, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "1",
			"y": "5",
			width: "22",
			height: "14",
			rx: "7",
			ry: "7"
		}), circle({
			cx: "8",
			cy: "12",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/ToggleRight.ts
	const ToggleRight = (props = {}) => {
		const { rect, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "1",
			"y": "5",
			width: "22",
			height: "14",
			rx: "7",
			ry: "7"
		}), circle({
			cx: "16",
			cy: "12",
			"r": "3"
		}));
	};
	//#endregion
	//#region src/icons/Tool.ts
	const Tool = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }));
	};
	//#endregion
	//#region src/icons/Trash2.ts
	const Trash2 = (props = {}) => {
		const { polyline, path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "3 6 5 6 21 6" }), path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), line({
			x1: "10",
			y1: "11",
			x2: "10",
			y2: "17"
		}), line({
			x1: "14",
			y1: "11",
			x2: "14",
			y2: "17"
		}));
	};
	//#endregion
	//#region src/icons/Trash.ts
	const Trash = (props = {}) => {
		const { polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "3 6 5 6 21 6" }), path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
	};
	//#endregion
	//#region src/icons/Trello.ts
	const Trello = (props = {}) => {
		const { rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), rect({
			"x": "7",
			"y": "7",
			width: "3",
			height: "9"
		}), rect({
			"x": "14",
			"y": "7",
			width: "3",
			height: "5"
		}));
	};
	//#endregion
	//#region src/icons/TrendingDown.ts
	const TrendingDown = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "23 18 13.5 8.5 8.5 13.5 1 6" }), polyline({ points: "17 18 23 18 23 12" }));
	};
	//#endregion
	//#region src/icons/TrendingUp.ts
	const TrendingUp = (props = {}) => {
		const { polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "23 6 13.5 15.5 8.5 10.5 1 18" }), polyline({ points: "17 6 23 6 23 12" }));
	};
	//#endregion
	//#region src/icons/Triangle.ts
	const Triangle = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }));
	};
	//#endregion
	//#region src/icons/Truck.ts
	const Truck = (props = {}) => {
		const { rect, polygon, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "1",
			"y": "3",
			width: "15",
			height: "13"
		}), polygon({ points: "16 8 20 8 23 11 23 16 16 16 16 8" }), circle({
			cx: "5.5",
			cy: "18.5",
			"r": "2.5"
		}), circle({
			cx: "18.5",
			cy: "18.5",
			"r": "2.5"
		}));
	};
	//#endregion
	//#region src/icons/Tv.ts
	const Tv = (props = {}) => {
		const { rect, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "2",
			"y": "7",
			width: "20",
			height: "15",
			rx: "2",
			ry: "2"
		}), polyline({ points: "17 2 12 7 7 2" }));
	};
	//#endregion
	//#region src/icons/Twitch.ts
	const Twitch = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }));
	};
	//#endregion
	//#region src/icons/Twitter.ts
	const Twitter = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }));
	};
	//#endregion
	//#region src/icons/Type.ts
	const Type = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "4 7 4 4 20 4 20 7" }), line({
			x1: "9",
			y1: "20",
			x2: "15",
			y2: "20"
		}), line({
			x1: "12",
			y1: "4",
			x2: "12",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/Umbrella.ts
	const Umbrella = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" }));
	};
	//#endregion
	//#region src/icons/Underline.ts
	const Underline = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }), line({
			x1: "4",
			y1: "21",
			x2: "20",
			y2: "21"
		}));
	};
	//#endregion
	//#region src/icons/Unlock.ts
	const Unlock = (props = {}) => {
		const { rect, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "11",
			width: "18",
			height: "11",
			rx: "2",
			ry: "2"
		}), path({ "d": "M7 11V7a5 5 0 0 1 9.9-1" }));
	};
	//#endregion
	//#region src/icons/UploadCloud.ts
	const UploadCloud = (props = {}) => {
		const { polyline, line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "16 16 12 12 8 16" }), line({
			x1: "12",
			y1: "12",
			x2: "12",
			y2: "21"
		}), path({ "d": "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }), polyline({ points: "16 16 12 12 8 16" }));
	};
	//#endregion
	//#region src/icons/Upload.ts
	const Upload = (props = {}) => {
		const { path, polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), polyline({ points: "17 8 12 3 7 8" }), line({
			x1: "12",
			y1: "3",
			x2: "12",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/UserCheck.ts
	const UserCheck = (props = {}) => {
		const { path, circle, polyline } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
			cx: "8.5",
			cy: "7",
			"r": "4"
		}), polyline({ points: "17 11 19 13 23 9" }));
	};
	//#endregion
	//#region src/icons/UserMinus.ts
	const UserMinus = (props = {}) => {
		const { path, circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
			cx: "8.5",
			cy: "7",
			"r": "4"
		}), line({
			x1: "23",
			y1: "11",
			x2: "17",
			y2: "11"
		}));
	};
	//#endregion
	//#region src/icons/UserPlus.ts
	const UserPlus = (props = {}) => {
		const { path, circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
			cx: "8.5",
			cy: "7",
			"r": "4"
		}), line({
			x1: "20",
			y1: "8",
			x2: "20",
			y2: "14"
		}), line({
			x1: "23",
			y1: "11",
			x2: "17",
			y2: "11"
		}));
	};
	//#endregion
	//#region src/icons/UserX.ts
	const UserX = (props = {}) => {
		const { path, circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
			cx: "8.5",
			cy: "7",
			"r": "4"
		}), line({
			x1: "18",
			y1: "8",
			x2: "23",
			y2: "13"
		}), line({
			x1: "23",
			y1: "8",
			x2: "18",
			y2: "13"
		}));
	};
	//#endregion
	//#region src/icons/User.ts
	const User = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), circle({
			cx: "12",
			cy: "7",
			"r": "4"
		}));
	};
	//#endregion
	//#region src/icons/Users.ts
	const Users = (props = {}) => {
		const { path, circle } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
			cx: "9",
			cy: "7",
			"r": "4"
		}), path({ "d": "M23 21v-2a4 4 0 0 0-3-3.87" }), path({ "d": "M16 3.13a4 4 0 0 1 0 7.75" }));
	};
	//#endregion
	//#region src/icons/VideoOff.ts
	const VideoOff = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Video.ts
	const Video = (props = {}) => {
		const { polygon, rect } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "23 7 16 12 23 17 23 7" }), rect({
			"x": "1",
			"y": "5",
			width: "15",
			height: "14",
			rx: "2",
			ry: "2"
		}));
	};
	//#endregion
	//#region src/icons/Voicemail.ts
	const Voicemail = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "5.5",
			cy: "11.5",
			"r": "4.5"
		}), circle({
			cx: "18.5",
			cy: "11.5",
			"r": "4.5"
		}), line({
			x1: "5.5",
			y1: "16",
			x2: "18.5",
			y2: "16"
		}));
	};
	//#endregion
	//#region src/icons/Volume1.ts
	const Volume1 = (props = {}) => {
		const { polygon, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), path({ "d": "M15.54 8.46a5 5 0 0 1 0 7.07" }));
	};
	//#endregion
	//#region src/icons/Volume2.ts
	const Volume2 = (props = {}) => {
		const { polygon, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), path({ "d": "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }));
	};
	//#endregion
	//#region src/icons/VolumeX.ts
	const VolumeX = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), line({
			x1: "23",
			y1: "9",
			x2: "17",
			y2: "15"
		}), line({
			x1: "17",
			y1: "9",
			x2: "23",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/Volume.ts
	const Volume = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }));
	};
	//#endregion
	//#region src/icons/Watch.ts
	const Watch = (props = {}) => {
		const { circle, polyline, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "7"
		}), polyline({ points: "12 9 12 12 13.5 13.5" }), path({ "d": "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }));
	};
	//#endregion
	//#region src/icons/WifiOff.ts
	const WifiOff = (props = {}) => {
		const { line, path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}), path({ "d": "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }), path({ "d": "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }), path({ "d": "M10.71 5.05A16 16 0 0 1 22.58 9" }), path({ "d": "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }), path({ "d": "M8.53 16.11a6 6 0 0 1 6.95 0" }), line({
			x1: "12",
			y1: "20",
			x2: "12.01",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/Wifi.ts
	const Wifi = (props = {}) => {
		const { path, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M5 12.55a11 11 0 0 1 14.08 0" }), path({ "d": "M1.42 9a16 16 0 0 1 21.16 0" }), path({ "d": "M8.53 16.11a6 6 0 0 1 6.95 0" }), line({
			x1: "12",
			y1: "20",
			x2: "12.01",
			y2: "20"
		}));
	};
	//#endregion
	//#region src/icons/Wind.ts
	const Wind = (props = {}) => {
		const { path } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }));
	};
	//#endregion
	//#region src/icons/XCircle.ts
	const XCircle = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "12",
			cy: "12",
			"r": "10"
		}), line({
			x1: "15",
			y1: "9",
			x2: "9",
			y2: "15"
		}), line({
			x1: "9",
			y1: "9",
			x2: "15",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/XOctagon.ts
	const XOctagon = (props = {}) => {
		const { polygon, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }), line({
			x1: "15",
			y1: "9",
			x2: "9",
			y2: "15"
		}), line({
			x1: "9",
			y1: "9",
			x2: "15",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/XSquare.ts
	const XSquare = (props = {}) => {
		const { rect, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, rect({
			"x": "3",
			"y": "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), line({
			x1: "9",
			y1: "9",
			x2: "15",
			y2: "15"
		}), line({
			x1: "15",
			y1: "9",
			x2: "9",
			y2: "15"
		}));
	};
	//#endregion
	//#region src/icons/X.ts
	const X = (props = {}) => {
		const { line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, line({
			x1: "18",
			y1: "6",
			x2: "6",
			y2: "18"
		}), line({
			x1: "6",
			y1: "6",
			x2: "18",
			y2: "18"
		}));
	};
	//#endregion
	//#region src/icons/Youtube.ts
	const Youtube = (props = {}) => {
		const { path, polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, path({ "d": "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }), polygon({ points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }));
	};
	//#endregion
	//#region src/icons/ZapOff.ts
	const ZapOff = (props = {}) => {
		const { polyline, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polyline({ points: "12.41 6.75 13 2 10.57 4.92" }), polyline({ points: "18.57 12.91 21 10 15.66 10" }), polyline({ points: "8 8 3 14 12 14 11 22 16 16" }), line({
			x1: "1",
			y1: "1",
			x2: "23",
			y2: "23"
		}));
	};
	//#endregion
	//#region src/icons/Zap.ts
	const Zap = (props = {}) => {
		const { polygon } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, polygon({ points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }));
	};
	//#endregion
	//#region src/icons/ZoomIn.ts
	const ZoomIn = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "11",
			cy: "11",
			"r": "8"
		}), line({
			x1: "21",
			y1: "21",
			x2: "16.65",
			y2: "16.65"
		}), line({
			x1: "11",
			y1: "8",
			x2: "11",
			y2: "14"
		}), line({
			x1: "8",
			y1: "11",
			x2: "14",
			y2: "11"
		}));
	};
	//#endregion
	//#region src/icons/ZoomOut.ts
	const ZoomOut = (props = {}) => {
		const { circle, line } = vanjs_core.default.tags(svgNamespace);
		return FeatherIcon(props, circle({
			cx: "11",
			cy: "11",
			"r": "8"
		}), line({
			x1: "21",
			y1: "21",
			x2: "16.65",
			y2: "16.65"
		}), line({
			x1: "8",
			y1: "11",
			x2: "14",
			y2: "11"
		}));
	};
	//#endregion
	exports.Activity = Activity;
	exports.Airplay = Airplay;
	exports.AlertCircle = AlertCircle;
	exports.AlertOctagon = AlertOctagon;
	exports.AlertTriangle = AlertTriangle;
	exports.AlignCenter = AlignCenter;
	exports.AlignJustify = AlignJustify;
	exports.AlignLeft = AlignLeft;
	exports.AlignRight = AlignRight;
	exports.Anchor = Anchor;
	exports.Aperture = Aperture;
	exports.Archive = Archive;
	exports.ArrowDown = ArrowDown;
	exports.ArrowDownCircle = ArrowDownCircle;
	exports.ArrowDownLeft = ArrowDownLeft;
	exports.ArrowDownRight = ArrowDownRight;
	exports.ArrowLeft = ArrowLeft;
	exports.ArrowLeftCircle = ArrowLeftCircle;
	exports.ArrowRight = ArrowRight;
	exports.ArrowRightCircle = ArrowRightCircle;
	exports.ArrowUp = ArrowUp;
	exports.ArrowUpCircle = ArrowUpCircle;
	exports.ArrowUpLeft = ArrowUpLeft;
	exports.ArrowUpRight = ArrowUpRight;
	exports.AtSign = AtSign;
	exports.Award = Award;
	exports.BarChart = BarChart;
	exports.BarChart2 = BarChart2;
	exports.Battery = Battery;
	exports.BatteryCharging = BatteryCharging;
	exports.Bell = Bell;
	exports.BellOff = BellOff;
	exports.Bluetooth = Bluetooth;
	exports.Bold = Bold;
	exports.Book = Book;
	exports.BookOpen = BookOpen;
	exports.Bookmark = Bookmark;
	exports.Box = Box;
	exports.Briefcase = Briefcase;
	exports.Calendar = Calendar;
	exports.Camera = Camera;
	exports.CameraOff = CameraOff;
	exports.Cast = Cast;
	exports.Check = Check;
	exports.CheckCircle = CheckCircle;
	exports.CheckSquare = CheckSquare;
	exports.ChevronDown = ChevronDown;
	exports.ChevronLeft = ChevronLeft;
	exports.ChevronRight = ChevronRight;
	exports.ChevronUp = ChevronUp;
	exports.ChevronsDown = ChevronsDown;
	exports.ChevronsLeft = ChevronsLeft;
	exports.ChevronsRight = ChevronsRight;
	exports.ChevronsUp = ChevronsUp;
	exports.Chrome = Chrome;
	exports.Circle = Circle;
	exports.Clipboard = Clipboard;
	exports.Clock = Clock;
	exports.Cloud = Cloud;
	exports.CloudDrizzle = CloudDrizzle;
	exports.CloudLightning = CloudLightning;
	exports.CloudOff = CloudOff;
	exports.CloudRain = CloudRain;
	exports.CloudSnow = CloudSnow;
	exports.Code = Code;
	exports.Codepen = Codepen;
	exports.Codesandbox = Codesandbox;
	exports.Coffee = Coffee;
	exports.Columns = Columns;
	exports.Command = Command;
	exports.Compass = Compass;
	exports.Copy = Copy;
	exports.CornerDownLeft = CornerDownLeft;
	exports.CornerDownRight = CornerDownRight;
	exports.CornerLeftDown = CornerLeftDown;
	exports.CornerLeftUp = CornerLeftUp;
	exports.CornerRightDown = CornerRightDown;
	exports.CornerRightUp = CornerRightUp;
	exports.CornerUpLeft = CornerUpLeft;
	exports.CornerUpRight = CornerUpRight;
	exports.Cpu = Cpu;
	exports.CreditCard = CreditCard;
	exports.Crop = Crop;
	exports.Crosshair = Crosshair;
	exports.Database = Database;
	exports.Delete = Delete;
	exports.Disc = Disc;
	exports.Divide = Divide;
	exports.DivideCircle = DivideCircle;
	exports.DivideSquare = DivideSquare;
	exports.DollarSign = DollarSign;
	exports.Download = Download;
	exports.DownloadCloud = DownloadCloud;
	exports.Dribbble = Dribbble;
	exports.Droplet = Droplet;
	exports.Edit = Edit;
	exports.Edit2 = Edit2;
	exports.Edit3 = Edit3;
	exports.ExternalLink = ExternalLink;
	exports.Eye = Eye;
	exports.EyeOff = EyeOff;
	exports.Facebook = Facebook;
	exports.FastForward = FastForward;
	exports.Feather = Feather;
	exports.Figma = Figma;
	exports.File = File;
	exports.FileMinus = FileMinus;
	exports.FilePlus = FilePlus;
	exports.FileText = FileText;
	exports.Film = Film;
	exports.Filter = Filter;
	exports.Flag = Flag;
	exports.Folder = Folder;
	exports.FolderMinus = FolderMinus;
	exports.FolderPlus = FolderPlus;
	exports.Framer = Framer;
	exports.Frown = Frown;
	exports.Gift = Gift;
	exports.GitBranch = GitBranch;
	exports.GitCommit = GitCommit;
	exports.GitMerge = GitMerge;
	exports.GitPullRequest = GitPullRequest;
	exports.Github = Github;
	exports.Gitlab = Gitlab;
	exports.Globe = Globe;
	exports.Grid = Grid;
	exports.HardDrive = HardDrive;
	exports.Hash = Hash;
	exports.Headphones = Headphones;
	exports.Heart = Heart;
	exports.HelpCircle = HelpCircle;
	exports.Hexagon = Hexagon;
	exports.Home = Home;
	exports.Image = Image;
	exports.Inbox = Inbox;
	exports.Info = Info;
	exports.Instagram = Instagram;
	exports.Italic = Italic;
	exports.Key = Key;
	exports.Layers = Layers;
	exports.Layout = Layout;
	exports.LifeBuoy = LifeBuoy;
	exports.Link = Link;
	exports.Link2 = Link2;
	exports.Linkedin = Linkedin;
	exports.List = List;
	exports.Loader = Loader;
	exports.Lock = Lock;
	exports.LogIn = LogIn;
	exports.LogOut = LogOut;
	exports.Mail = Mail;
	exports.Map = Map;
	exports.MapPin = MapPin;
	exports.Maximize = Maximize;
	exports.Maximize2 = Maximize2;
	exports.Meh = Meh;
	exports.Menu = Menu;
	exports.MessageCircle = MessageCircle;
	exports.MessageSquare = MessageSquare;
	exports.Mic = Mic;
	exports.MicOff = MicOff;
	exports.Minimize = Minimize;
	exports.Minimize2 = Minimize2;
	exports.Minus = Minus;
	exports.MinusCircle = MinusCircle;
	exports.MinusSquare = MinusSquare;
	exports.Monitor = Monitor;
	exports.Moon = Moon;
	exports.MoreHorizontal = MoreHorizontal;
	exports.MoreVertical = MoreVertical;
	exports.MousePointer = MousePointer;
	exports.Move = Move;
	exports.Music = Music;
	exports.Navigation = Navigation;
	exports.Navigation2 = Navigation2;
	exports.Octagon = Octagon;
	exports.Package = Package;
	exports.Paperclip = Paperclip;
	exports.Pause = Pause;
	exports.PauseCircle = PauseCircle;
	exports.PenTool = PenTool;
	exports.Percent = Percent;
	exports.Phone = Phone;
	exports.PhoneCall = PhoneCall;
	exports.PhoneForwarded = PhoneForwarded;
	exports.PhoneIncoming = PhoneIncoming;
	exports.PhoneMissed = PhoneMissed;
	exports.PhoneOff = PhoneOff;
	exports.PhoneOutgoing = PhoneOutgoing;
	exports.PieChart = PieChart;
	exports.Play = Play;
	exports.PlayCircle = PlayCircle;
	exports.Plus = Plus;
	exports.PlusCircle = PlusCircle;
	exports.PlusSquare = PlusSquare;
	exports.Pocket = Pocket;
	exports.Power = Power;
	exports.Printer = Printer;
	exports.Radio = Radio;
	exports.RefreshCcw = RefreshCcw;
	exports.RefreshCw = RefreshCw;
	exports.Repeat = Repeat;
	exports.Rewind = Rewind;
	exports.RotateCcw = RotateCcw;
	exports.RotateCw = RotateCw;
	exports.Rss = Rss;
	exports.Save = Save;
	exports.Scissors = Scissors;
	exports.Search = Search;
	exports.Send = Send;
	exports.Server = Server;
	exports.Settings = Settings;
	exports.Share = Share;
	exports.Share2 = Share2;
	exports.Shield = Shield;
	exports.ShieldOff = ShieldOff;
	exports.ShoppingBag = ShoppingBag;
	exports.ShoppingCart = ShoppingCart;
	exports.Shuffle = Shuffle;
	exports.Sidebar = Sidebar;
	exports.SkipBack = SkipBack;
	exports.SkipForward = SkipForward;
	exports.Slack = Slack;
	exports.Slash = Slash;
	exports.Sliders = Sliders;
	exports.Smartphone = Smartphone;
	exports.Smile = Smile;
	exports.Speaker = Speaker;
	exports.Square = Square;
	exports.Star = Star;
	exports.StopCircle = StopCircle;
	exports.Sun = Sun;
	exports.Sunrise = Sunrise;
	exports.Sunset = Sunset;
	exports.Table = Table;
	exports.Tablet = Tablet;
	exports.Tag = Tag;
	exports.Target = Target;
	exports.Terminal = Terminal;
	exports.Thermometer = Thermometer;
	exports.ThumbsDown = ThumbsDown;
	exports.ThumbsUp = ThumbsUp;
	exports.ToggleLeft = ToggleLeft;
	exports.ToggleRight = ToggleRight;
	exports.Tool = Tool;
	exports.Trash = Trash;
	exports.Trash2 = Trash2;
	exports.Trello = Trello;
	exports.TrendingDown = TrendingDown;
	exports.TrendingUp = TrendingUp;
	exports.Triangle = Triangle;
	exports.Truck = Truck;
	exports.Tv = Tv;
	exports.Twitch = Twitch;
	exports.Twitter = Twitter;
	exports.Type = Type;
	exports.Umbrella = Umbrella;
	exports.Underline = Underline;
	exports.Unlock = Unlock;
	exports.Upload = Upload;
	exports.UploadCloud = UploadCloud;
	exports.User = User;
	exports.UserCheck = UserCheck;
	exports.UserMinus = UserMinus;
	exports.UserPlus = UserPlus;
	exports.UserX = UserX;
	exports.Users = Users;
	exports.Video = Video;
	exports.VideoOff = VideoOff;
	exports.Voicemail = Voicemail;
	exports.Volume = Volume;
	exports.Volume1 = Volume1;
	exports.Volume2 = Volume2;
	exports.VolumeX = VolumeX;
	exports.Watch = Watch;
	exports.Wifi = Wifi;
	exports.WifiOff = WifiOff;
	exports.Wind = Wind;
	exports.X = X;
	exports.XCircle = XCircle;
	exports.XOctagon = XOctagon;
	exports.XSquare = XSquare;
	exports.Youtube = Youtube;
	exports.Zap = Zap;
	exports.ZapOff = ZapOff;
	exports.ZoomIn = ZoomIn;
	exports.ZoomOut = ZoomOut;
});

//# sourceMappingURL=index.umd.js.map