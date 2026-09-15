/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Maximize2.ts
const Maximize2 = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
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
export { Maximize2 };

//# sourceMappingURL=Maximize2.js.map