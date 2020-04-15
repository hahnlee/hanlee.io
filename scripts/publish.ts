import * as ghpages from 'gh-pages'

ghpages.publish('public', {
  branch: 'master',
  repo: 'https://github.com/hahnlee/hahnlee.github.io.git',
  dotfiles: true,
})
