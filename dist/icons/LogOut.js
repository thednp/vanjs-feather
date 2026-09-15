/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/LogOut.ts
const LogOut = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), polyline({ points: "16 17 21 12 16 7" }), line({
		x1: "21",
		y1: "12",
		x2: "9",
		y2: "12"
	}));
};
//#endregion
export { LogOut };

//# sourceMappingURL=LogOut.js.map