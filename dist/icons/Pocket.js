/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Pocket.ts
const Pocket = (props = {}) => {
	const { path, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }), polyline({ points: "8 10 12 14 16 10" }));
};
//#endregion
export { Pocket };

//# sourceMappingURL=Pocket.js.map