const ghpages = require('gh-pages');

ghpages.publish('build', {
  src: [
    '**/*',
    '!bundle.js',
    '!**/*.map',
  ],
  branch: 'master',
  repo: 'https://github.com/sn0wle0pard/sn0wle0pard.github.io.git',
  dotfiles: true,
});