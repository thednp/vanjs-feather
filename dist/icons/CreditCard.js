/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CreditCard.ts
const CreditCard = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "1",
		"y": "4",
		width: "22",
		height: "16",
		rx: "2",
		ry: "2"
	}), line({
		x1: "1",
		y1: "10",
		x2: "23",
		y2: "10"
	}));
};
//#endregion
export { CreditCard };

//# sourceMappingURL=CreditCard.js.map