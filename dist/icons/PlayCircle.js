/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/PlayCircle.ts
const PlayCircle = (props = {}) => {
	const { circle, polygon } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), polygon({ points: "10 8 16 12 10 16 10 8" }));
};
//#endregion
export { PlayCircle };

//# sourceMappingURL=PlayCircle.js.map