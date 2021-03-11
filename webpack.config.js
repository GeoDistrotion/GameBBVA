const SOURCE_DIR = __dirname + 'src';
const DIST_DIR = __dirname + 'app';

module.exports = {
    entry: [
        `${SOURCE_DIR}/index.html`
    ],
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: 'index.js'
    }
}