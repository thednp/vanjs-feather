/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Monitor.ts
const Monitor = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
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
export { Monitor };

//# sourceMappingURL=Monitor.js.map