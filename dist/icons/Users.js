/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Users.ts
const Users = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}), path({ "d": "M23 21v-2a4 4 0 0 0-3-3.87" }), path({ "d": "M16 3.13a4 4 0 0 1 0 7.75" }));
};
//#endregion
export { Users };

//# sourceMappingURL=Users.js.map