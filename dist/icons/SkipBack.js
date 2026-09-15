/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/SkipBack.ts
const SkipBack = (props = {}) => {
	const { polygon, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "19 20 9 12 19 4 19 20" }), line({
		x1: "5",
		y1: "19",
		x2: "5",
		y2: "5"
	}));
};
//#endregion
export { SkipBack };

//# sourceMappingURL=SkipBack.js.map