/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Music.ts
const Music = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M9 18V5l12-2v13" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
export { Music };

//# sourceMappingURL=Music.js.map