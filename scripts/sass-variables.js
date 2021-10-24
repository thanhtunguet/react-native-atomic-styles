const sassMapToJson = require('sass-maps-to-json');

sassMapToJson({
  src: 'src/partials/_colors.scss',
  dest: 'src/colors.json',
});

sassMapToJson({
  src: 'src/partials/_font-families.scss',
  dest: 'src/font-families.json',
});
