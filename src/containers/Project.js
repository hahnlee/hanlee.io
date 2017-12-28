import React, { Component } from 'react';

import stackInfo from '../data/stack.json';
import projectInfo from '../data/project.json';

import './Project.scss';

class App extends Component {
  render() {
    return (
      <section>
        <header className="project-title">
          <h1>Project</h1>
        </header>
        {projectInfo.data.map((data, index) => (
          <div key={index} className={`project${index % 2 ? '' : ' gray-bg'}`}>
            <figure className="img-wrap">
              <img
                src={require(`../assets/img/project/${data.title_img}`)}
              />
            </figure>
            <div className="description">
              <div className="content-wrap">
                <h1>{data.name}</h1>
                <h2>{data.description}</h2>
                <div className="stack">
                  {data.stack.map((stack, index) => (
                    <img
                      key={index}
                      src={require(`../assets/img/logo/${stack}.svg`)}
                      alt={stack}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default App;
