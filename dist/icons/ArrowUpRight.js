/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowUpRight.ts
const ArrowUpRight = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "7",
		y1: "17",
		x2: "17",
		y2: "7"
	}), polyline({ points: "7 7 17 7 17 17" }));
};
//#endregion
export { ArrowUpRight };

//# sourceMappingURL=ArrowUpRight.js.map