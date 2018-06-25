const ghpages = require('gh-pages');

ghpages.publish('build', {
  src: [
    '**/*',
    '!**/*.map',
  ],
  branch: 'master',
  repo: 'https://github.com/hahnlee/hahnlee.github.io.git',
  dotfiles: true,
});
