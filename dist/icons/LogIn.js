/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/LogIn.ts
const LogIn = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }), polyline({ points: "10 17 15 12 10 7" }), line({
		x1: "15",
		y1: "12",
		x2: "3",
		y2: "12"
	}));
};
//#endregion
export { LogIn };

//# sourceMappingURL=LogIn.js.map