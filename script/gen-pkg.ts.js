'use strict';

let fs = require('fs');
let path = require('path');
let pkg = require('../package.json');

let code = `// Generated by ${path.basename(__filename)}\n\n`;
const props = ['version', 'name'];

for (let p of props) {
	code += `export const ${p} = '${pkg[p]}';\n`;
}

fs.writeFileSync('./src/pkg.ts', code);