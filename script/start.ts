import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import renderConfig from '../config/webpack.development';


const compiler = webpack(renderConfig);
const port = 3000;

const devServer = new WebpackDevServer(compiler, renderConfig.devServer);
devServer.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }

  console.log(`Server running at http://localhost:${port}`);
});
