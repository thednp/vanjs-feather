/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowUpCircle.ts
const ArrowUpCircle = (props = {}) => {
	const { circle, polyline, line } = van.tags(svgNamespace);
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
export { ArrowUpCircle };

//# sourceMappingURL=ArrowUpCircle.js.map