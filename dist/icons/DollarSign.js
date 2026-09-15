/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/DollarSign.ts
const DollarSign = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "12",
		y1: "1",
		x2: "12",
		y2: "23"
	}), path({ "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }));
};
//#endregion
export { DollarSign };

//# sourceMappingURL=DollarSign.js.map