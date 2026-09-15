/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/SkipForward.ts
const SkipForward = (props = {}) => {
	const { polygon, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "5 4 15 12 5 20 5 4" }), line({
		x1: "19",
		y1: "5",
		x2: "19",
		y2: "19"
	}));
};
//#endregion
export { SkipForward };

//# sourceMappingURL=SkipForward.js.map