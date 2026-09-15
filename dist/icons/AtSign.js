/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/AtSign.ts
const AtSign = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }));
};
//#endregion
export { AtSign };

//# sourceMappingURL=AtSign.js.map