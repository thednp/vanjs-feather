/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Archive.ts
const Archive = (props = {}) => {
	const { polyline, rect, line } = van.tags(svgNamespace);
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
export { Archive };

//# sourceMappingURL=Archive.js.map