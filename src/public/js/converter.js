const pug = require('pug');
const fs = require('fs');
const path = require('path');

const viewsDir = './src/public/view/page/';
const htmlDir = './src/public/html/';

function convertPugToHtml() {
    fs.readdir(viewsDir, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            if (path.extname(file) === '.pug') {
                const pugFile = path.join(viewsDir, file);
                const htmlFile = path.join(htmlDir, path.basename(file, '.pug') + '.html');
                const html = pug.renderFile(pugFile);
                fs.writeFileSync(htmlFile, html);
            }
        });
    });
}

module.exports = convertPugToHtml;
