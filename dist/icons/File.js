/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/File.ts
const File = (props = {}) => {
	const { path, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }), polyline({ points: "13 2 13 9 20 9" }));
};
//#endregion
export { File };

//# sourceMappingURL=File.js.map