/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Layers.ts
const Layers = (props = {}) => {
	const { polygon, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "12 2 2 7 12 12 22 7 12 2" }), polyline({ points: "2 17 12 22 22 17" }), polyline({ points: "2 12 12 17 22 12" }));
};
//#endregion
export { Layers };

//# sourceMappingURL=Layers.js.map