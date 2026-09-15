/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Terminal.ts
const Terminal = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "4 17 10 11 4 5" }), line({
		x1: "12",
		y1: "19",
		x2: "20",
		y2: "19"
	}));
};
//#endregion
export { Terminal };

//# sourceMappingURL=Terminal.js.map