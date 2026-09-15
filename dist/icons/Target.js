/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Target.ts
const Target = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "6"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
export { Target };

//# sourceMappingURL=Target.js.map