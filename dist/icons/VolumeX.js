/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/VolumeX.ts
const VolumeX = (props = {}) => {
	const { polygon, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), line({
		x1: "23",
		y1: "9",
		x2: "17",
		y2: "15"
	}), line({
		x1: "17",
		y1: "9",
		x2: "23",
		y2: "15"
	}));
};
//#endregion
export { VolumeX };

//# sourceMappingURL=VolumeX.js.map