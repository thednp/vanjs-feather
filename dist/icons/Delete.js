/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Delete.ts
const Delete = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }), line({
		x1: "18",
		y1: "9",
		x2: "12",
		y2: "15"
	}), line({
		x1: "12",
		y1: "9",
		x2: "18",
		y2: "15"
	}));
};
//#endregion
export { Delete };

//# sourceMappingURL=Delete.js.map