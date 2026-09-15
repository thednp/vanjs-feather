/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Battery.ts
const Battery = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "1",
		"y": "6",
		width: "18",
		height: "12",
		rx: "2",
		ry: "2"
	}), line({
		x1: "23",
		y1: "13",
		x2: "23",
		y2: "11"
	}));
};
//#endregion
export { Battery };

//# sourceMappingURL=Battery.js.map