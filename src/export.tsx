import * as fs from 'fs';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { App } from 'containers';


const reactHtml = ReactDOMServer.renderToString(<App />);
const html = fs.readFileSync('dist/index.html')
  .toString()
  .replace('<!--REACT-DATA-->', reactHtml);

fs.writeFileSync('dist/index.html', html, 'utf8');
