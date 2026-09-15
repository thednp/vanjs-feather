/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/StopCircle.ts
const StopCircle = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), rect({
		"x": "9",
		"y": "9",
		width: "6",
		height: "6"
	}));
};
//#endregion
export { StopCircle };

//# sourceMappingURL=StopCircle.js.map