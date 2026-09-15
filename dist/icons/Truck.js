/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Truck.ts
const Truck = (props = {}) => {
	const { rect, polygon, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "1",
		"y": "3",
		width: "15",
		height: "13"
	}), polygon({ points: "16 8 20 8 23 11 23 16 16 16 16 8" }), circle({
		cx: "5.5",
		cy: "18.5",
		"r": "2.5"
	}), circle({
		cx: "18.5",
		cy: "18.5",
		"r": "2.5"
	}));
};
//#endregion
export { Truck };

//# sourceMappingURL=Truck.js.map