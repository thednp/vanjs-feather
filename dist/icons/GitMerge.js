/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/GitMerge.ts
const GitMerge = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M6 21V9a9 9 0 0 0 9 9" }));
};
//#endregion
export { GitMerge };

//# sourceMappingURL=GitMerge.js.map