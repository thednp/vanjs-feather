/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Voicemail.ts
const Voicemail = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "5.5",
		cy: "11.5",
		"r": "4.5"
	}), circle({
		cx: "18.5",
		cy: "11.5",
		"r": "4.5"
	}), line({
		x1: "5.5",
		y1: "16",
		x2: "18.5",
		y2: "16"
	}));
};
//#endregion
export { Voicemail };

//# sourceMappingURL=Voicemail.js.map