/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/MapPin.ts
const MapPin = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}));
};
//#endregion
export { MapPin };

//# sourceMappingURL=MapPin.js.map