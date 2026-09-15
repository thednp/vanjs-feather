/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowUp.ts
const ArrowUp = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "12",
		y1: "19",
		x2: "12",
		y2: "5"
	}), polyline({ points: "5 12 12 5 19 12" }));
};
//#endregion
export { ArrowUp };

//# sourceMappingURL=ArrowUp.js.map