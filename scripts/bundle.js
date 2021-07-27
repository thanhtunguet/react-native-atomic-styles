const fs = require('fs');
const path = require('path');
const {default: transform} = require('css-to-react-native-transform');

const filePath = path.resolve(__dirname, '..', 'dist/styles.scss');

const css = fs.readFileSync(filePath, {
  encoding: 'utf-8',
});

const js = transform(css);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'dist/styles.json'),
  JSON.stringify(js, null, 2),
);
