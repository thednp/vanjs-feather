/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Printer.ts
const Printer = (props = {}) => {
	const { polyline, path, rect } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "6 9 6 2 18 2 18 9" }), path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }), rect({
		"x": "6",
		"y": "14",
		width: "12",
		height: "8"
	}));
};
//#endregion
export { Printer };

//# sourceMappingURL=Printer.js.map