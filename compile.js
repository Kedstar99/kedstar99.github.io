const pug = require('pug');
const fs = require('fs');

const indexPug = pug.compileFile('pug/index.pug')
const projectsPug = pug.compileFile('pug/projects.pug')

fs.writeFileSync("./index.html", indexPug())
fs.writeFileSync("./projects.html", projectsPug())