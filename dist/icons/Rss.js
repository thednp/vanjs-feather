/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Rss.ts
const Rss = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M4 11a9 9 0 0 1 9 9" }), path({ "d": "M4 4a16 16 0 0 1 16 16" }), circle({
		cx: "5",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
export { Rss };

//# sourceMappingURL=Rss.js.map