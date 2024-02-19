const fs = require('fs');

fs.writeFileSync(
  './build/index.html',
  fs.readFileSync('build/index.html', 'utf8').replaceAll('"/static/', '"./static/'),
  'utf8',
);
