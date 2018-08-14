import * as React from 'react';

import { About, Project } from 'containers';

import './App.scss';


const App: React.SFC<{}> = () => (
  <main className="application">
    <About/>
    <Project/>
  </main>
);

export default App;
