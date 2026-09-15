/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowLeftCircle.ts
const ArrowLeftCircle = (props = {}) => {
	const { circle, polyline, line } = van.tags(svgNamespace);
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
export { ArrowLeftCircle };

//# sourceMappingURL=ArrowLeftCircle.js.map