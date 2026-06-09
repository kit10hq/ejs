import fs from 'node:fs/promises';
import { render } from 'ejs';
import type { Kit10Plugin } from 'kit10';

export const ejsPlugin: Kit10Plugin = {
	kit10: true,
	htmlPreprocessor: {
		filter: /\.ejs/u,
		async transform(filename: string): Promise<string> {
			const contents_ejs = await fs.readFile(filename, 'utf8');
			return render(
				contents_ejs,
				{},
				{
					strict: true,
					filename,
				},
			);
		},
	},
};
