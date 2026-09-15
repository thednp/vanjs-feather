/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Video.ts
const Video = (props = {}) => {
	const { polygon, rect } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "23 7 16 12 23 17 23 7" }), rect({
		"x": "1",
		"y": "5",
		width: "15",
		height: "14",
		rx: "2",
		ry: "2"
	}));
};
//#endregion
export { Video };

//# sourceMappingURL=Video.js.map