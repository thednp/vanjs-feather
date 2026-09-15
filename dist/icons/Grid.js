/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Grid.ts
const Grid = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "3",
		"y": "3",
		width: "7",
		height: "7"
	}), rect({
		"x": "14",
		"y": "3",
		width: "7",
		height: "7"
	}), rect({
		"x": "14",
		"y": "14",
		width: "7",
		height: "7"
	}), rect({
		"x": "3",
		"y": "14",
		width: "7",
		height: "7"
	}));
};
//#endregion
export { Grid };

//# sourceMappingURL=Grid.js.map