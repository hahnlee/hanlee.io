const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const renderConfig = require('../config/webpack.development');

const compiler = webpack(renderConfig);
const port = process.env.PORT || 3000;

let devServer = new WebpackDevServer(compiler, renderConfig.devServer);
devServer.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }

  console.log(`Server running at http://localhost:${port}`);
});