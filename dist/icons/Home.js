/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Home.ts
const Home = (props = {}) => {
	const { path, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), polyline({ points: "9 22 9 12 15 12 15 22" }));
};
//#endregion
export { Home };

//# sourceMappingURL=Home.js.map