/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Underline.ts
const Underline = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }), line({
		x1: "4",
		y1: "21",
		x2: "20",
		y2: "21"
	}));
};
//#endregion
export { Underline };

//# sourceMappingURL=Underline.js.map