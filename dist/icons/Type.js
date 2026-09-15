/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Type.ts
const Type = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "4 7 4 4 20 4 20 7" }), line({
		x1: "9",
		y1: "20",
		x2: "15",
		y2: "20"
	}), line({
		x1: "12",
		y1: "4",
		x2: "12",
		y2: "20"
	}));
};
//#endregion
export { Type };

//# sourceMappingURL=Type.js.map