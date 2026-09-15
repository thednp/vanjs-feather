/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Image.ts
const Image = (props = {}) => {
	const { rect, circle, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2",
		ry: "2"
	}), circle({
		cx: "8.5",
		cy: "8.5",
		"r": "1.5"
	}), polyline({ points: "21 15 16 10 5 21" }));
};
//#endregion
export { Image };

//# sourceMappingURL=Image.js.map