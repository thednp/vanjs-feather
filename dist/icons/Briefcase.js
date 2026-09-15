/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Briefcase.ts
const Briefcase = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "2",
		"y": "7",
		width: "20",
		height: "14",
		rx: "2",
		ry: "2"
	}), path({ "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }));
};
//#endregion
export { Briefcase };

//# sourceMappingURL=Briefcase.js.map