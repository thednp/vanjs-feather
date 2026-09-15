/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Trash.ts
const Trash = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "3 6 5 6 21 6" }), path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
};
//#endregion
export { Trash };

//# sourceMappingURL=Trash.js.map