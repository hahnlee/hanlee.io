import React, { Component } from 'react';

import stackInfo from '../data/stack.json';
import projectInfo from '../data/project.json';

import './Project.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.filterByStack = this.filterByStack.bind(this);
  }

  onInputChange(e) {
    this.setState({
      stack: e.target.value,
    });
  }

  filterByStack(obj) {
    if (this.state.stack) {
      return obj.stack.includes(this.state.stack.toLowerCase());
    }
    return true;
  }

  render() {
    const filteredStack = projectInfo.data.filter(this.filterByStack);

    const renderStack = filteredStack.map((data, index) => (
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
    ));

    const noResult = (
      <div className="no-result">
        {`There's No Public Projcet of "${this.state.stack}" :(`}
      </div>
    );

    return (
      <section className="project-section">
        <div className="search-bar">
          <input
            type="text" placeholder="Search Project (eg, React)"
            onChange={this.onInputChange}
          />
        </div>
        {filteredStack.length ? renderStack : noResult}
      </section>
    );
  }
}

export default App;
