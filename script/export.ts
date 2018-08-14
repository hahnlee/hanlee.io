import * as path from 'path';
import { execSync } from 'child_process';

import * as webpack from 'webpack';

import serverConfig from '../config/webpack.production.server';


const compiler = webpack(serverConfig);
compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }

  execSync(`node ${path.resolve(__dirname, '..', 'build', 'bundle.js')}`);
});
