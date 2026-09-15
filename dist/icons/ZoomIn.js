/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ZoomIn.ts
const ZoomIn = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
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
export { ZoomIn };

//# sourceMappingURL=ZoomIn.js.map