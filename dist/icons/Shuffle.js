/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Shuffle.ts
const Shuffle = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "16 3 21 3 21 8" }), line({
		x1: "4",
		y1: "20",
		x2: "21",
		y2: "3"
	}), polyline({ points: "21 16 21 21 16 21" }), line({
		x1: "15",
		y1: "15",
		x2: "21",
		y2: "21"
	}), line({
		x1: "4",
		y1: "4",
		x2: "9",
		y2: "9"
	}));
};
//#endregion
export { Shuffle };

//# sourceMappingURL=Shuffle.js.map