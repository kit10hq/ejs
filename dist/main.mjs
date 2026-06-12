import { render } from "ejs";
//#region src/main.ts
const ejsPlugin = {
	filter: /\.ejs/u,
	async transform(artifact) {
		const content_html = render(await artifact.text(), {}, {
			strict: true,
			filename: artifact.absolute_path
		});
		artifact.updateExt("html");
		artifact.update(content_html);
	}
};
//#endregion
export { ejsPlugin };
