/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/PauseCircle.ts
const PauseCircle = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "10",
		y1: "15",
		x2: "10",
		y2: "9"
	}), line({
		x1: "14",
		y1: "15",
		x2: "14",
		y2: "9"
	}));
};
//#endregion
export { PauseCircle };

//# sourceMappingURL=PauseCircle.js.map