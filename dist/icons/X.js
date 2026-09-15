/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/X.ts
const X = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}), line({
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}));
};
//#endregion
export { X };

//# sourceMappingURL=X.js.map