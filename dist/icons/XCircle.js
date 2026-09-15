/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/XCircle.ts
const XCircle = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
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
export { XCircle };

//# sourceMappingURL=XCircle.js.map