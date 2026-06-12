import { render } from 'ejs';
import type { Plugin } from 'kit10';

export const ejsPlugin: Plugin = {
	filter: /\.ejs/u,
	async transform(artifact) {
		const content_ejs = await artifact.text();
		const content_html = render(
			content_ejs,
			{},
			{
				strict: true,
				filename: artifact.absolute_path,
			},
		);

		artifact.updateExt('html');
		artifact.update(content_html);
	},
};
