/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Anchor.ts
const Anchor = (props = {}) => {
	const { circle, line, path } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "5",
		"r": "3"
	}), line({
		x1: "12",
		y1: "22",
		x2: "12",
		y2: "8"
	}), path({ "d": "M5 12H2a10 10 0 0 0 20 0h-3" }));
};
//#endregion
export { Anchor };

//# sourceMappingURL=Anchor.js.map