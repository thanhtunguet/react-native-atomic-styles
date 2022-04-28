const fs = require('fs');
const path = require('path');
const {default: transform} = require('css-to-react-native-transform');
const sass = require('sass');

const filePath = path.resolve(__dirname, '..', 'dist/styles.scss');
const srcPath = path.resolve(__dirname, '..', 'src/styles.scss');

const preBuild = sass.compile(srcPath, {
  style: 'compressed',
});

fs.writeFileSync(filePath, preBuild.css);

const css = fs.readFileSync(filePath, 'utf-8');

const js = transform(css);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'dist/styles.json'),
  JSON.stringify(js, null, 2),
);
