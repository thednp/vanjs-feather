/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Instagram.ts
const Instagram = (props = {}) => {
	const { rect, path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "2",
		"y": "2",
		width: "20",
		height: "20",
		rx: "5",
		ry: "5"
	}), path({ "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }), line({
		x1: "17.5",
		y1: "6.5",
		x2: "17.51",
		y2: "6.5"
	}));
};
//#endregion
export { Instagram };

//# sourceMappingURL=Instagram.js.map