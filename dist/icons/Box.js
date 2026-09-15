/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Box.ts
const Box = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), polyline({ points: "3.27 6.96 12 12.01 20.73 6.96" }), line({
		x1: "12",
		y1: "22.08",
		x2: "12",
		y2: "12"
	}));
};
//#endregion
export { Box };

//# sourceMappingURL=Box.js.map