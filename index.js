const path = require('path');
const fs = require('fs');
const juice = require('juice');
const minify = require('html-minifier').minify;

const input = path.join(__dirname, 'src/input.html');
const output = path.join(__dirname, 'public/output.html');

fs.watchFile('src/input.html', _build); 
_build();

async function _build() {
	console.log('change');

	juice.juiceFile(input, {
		webResources: {
			images: false
		}
	}, (err, result) => {
		if (err) throw err;

		const newResult = minify(result, {
			removeAttributeQuotes: true,
			removeComments: true,
			collapseInlineTagWhitespace: true,
			collapseWhitespace: true
		});

		fs.writeFile(output,newResult, 'utf-8', (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	});
}