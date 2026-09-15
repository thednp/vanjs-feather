/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Linkedin.ts
const Linkedin = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }), rect({
		"x": "2",
		"y": "9",
		width: "4",
		height: "12"
	}), circle({
		cx: "4",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
export { Linkedin };

//# sourceMappingURL=Linkedin.js.map