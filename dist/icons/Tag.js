/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Tag.ts
const Tag = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), line({
		x1: "7",
		y1: "7",
		x2: "7.01",
		y2: "7"
	}));
};
//#endregion
export { Tag };

//# sourceMappingURL=Tag.js.map