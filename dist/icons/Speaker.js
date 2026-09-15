/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Speaker.ts
const Speaker = (props = {}) => {
	const { rect, circle, line } = van.tags(svgNamespace);
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
export { Speaker };

//# sourceMappingURL=Speaker.js.map