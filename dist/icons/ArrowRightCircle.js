/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowRightCircle.ts
const ArrowRightCircle = (props = {}) => {
	const { circle, polyline, line } = van.tags(svgNamespace);
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
export { ArrowRightCircle };

//# sourceMappingURL=ArrowRightCircle.js.map