const fs = require('fs');

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from 'containers';

const reactHtml = ReactDOMServer.renderToStaticMarkup(<App/>);
const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title>sn0wle0pard</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    ${reactHtml}
    <script>
      console.log('Hello developer!!');
      console.log('mail: mailto://hanlee.dev@gmail.com');
      console.log(
        '%c███████╗███╗   ██╗ ██████╗ ██╗    ██╗██╗     ███████╗ ██████╗ ██████╗  █████╗ ██████╗ ██████╗\\n' +
        '%c██╔════╝████╗  ██║██╔═████╗██║    ██║██║     ██╔════╝██╔═████╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗\\n' +
        '%c███████╗██╔██╗ ██║██║██╔██║██║ █╗ ██║██║     █████╗  ██║██╔██║██████╔╝███████║██████╔╝██║  ██║\\n' +
        '%c╚════██║██║╚██╗██║████╔╝██║██║███╗██║██║     ██╔══╝  ████╔╝██║██╔═══╝ ██╔══██║██╔══██╗██║  ██║\\n' +
        '%c███████║██║ ╚████║╚██████╔╝╚███╔███╔╝███████╗███████╗╚██████╔╝██║     ██║  ██║██║  ██║██████╔╝\\n' +
        '%c╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝\\n',
        'color:#0078FF;',
        'color:#148CFF;',
        'color:#28A0FF;',
        'color:#3CB4FF;',
        'color:#50C8FF;',
        'color:#5ABEFF',
      );
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111601591-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-111601591-1');
    </script>
  </body>
</html>
`;

fs.writeFileSync('build/index.html', html, 'utf8');
