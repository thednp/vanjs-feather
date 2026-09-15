/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Share.ts
const Share = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }), polyline({ points: "16 6 12 2 8 6" }), line({
		x1: "12",
		y1: "2",
		x2: "12",
		y2: "15"
	}));
};
//#endregion
export { Share };

//# sourceMappingURL=Share.js.map