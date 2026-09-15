/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Eye.ts
const Eye = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
export { Eye };

//# sourceMappingURL=Eye.js.map