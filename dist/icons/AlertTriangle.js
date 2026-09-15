/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/AlertTriangle.ts
const AlertTriangle = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }), line({
		x1: "12",
		y1: "9",
		x2: "12",
		y2: "13"
	}), line({
		x1: "12",
		y1: "17",
		x2: "12.01",
		y2: "17"
	}));
};
//#endregion
export { AlertTriangle };

//# sourceMappingURL=AlertTriangle.js.map