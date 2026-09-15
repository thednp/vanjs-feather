/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Copy.ts
const Copy = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "9",
		"y": "9",
		width: "13",
		height: "13",
		rx: "2",
		ry: "2"
	}), path({ "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }));
};
//#endregion
export { Copy };

//# sourceMappingURL=Copy.js.map