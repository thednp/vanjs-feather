/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Map.ts
const Map = (props = {}) => {
	const { polygon, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }), line({
		x1: "8",
		y1: "2",
		x2: "8",
		y2: "18"
	}), line({
		x1: "16",
		y1: "6",
		x2: "16",
		y2: "22"
	}));
};
//#endregion
export { Map };

//# sourceMappingURL=Map.js.map