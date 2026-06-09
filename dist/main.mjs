import fs from "node:fs/promises";
import { render } from "ejs";
//#region src/main.ts
const ejsPlugin = {
	kit10: true,
	htmlPreprocessor: {
		filter: /\.ejs/u,
		async transform(filename) {
			return render(await fs.readFile(filename, "utf8"), {}, {
				strict: true,
				filename
			});
		}
	}
};
//#endregion
export { ejsPlugin };
