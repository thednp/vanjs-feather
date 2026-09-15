/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Database.ts
const Database = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return FeatherIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }), path({ "d": "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }));
};
//#endregion
export { Database };

//# sourceMappingURL=Database.js.map