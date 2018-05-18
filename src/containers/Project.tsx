import * as React from 'react';

import { StackData } from '../data/stack';
import { ProjectData, IProjectInfo } from '../data/project';

import './Project.scss';

interface ProjcetProps {};

interface ProjcetState {
  stack: string,
};

export default
class Projcet extends React.Component<ProjcetProps, ProjcetState> {
  constructor(props: ProjcetProps) {
    super(props);
    this.state = {
      stack: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.filterByStack = this.filterByStack.bind(this);
  }

  onInputChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      stack: (e.target as HTMLInputElement).value,
    });
  }

  filterByStack(obj: IProjectInfo) {
    if (this.state.stack) {
      return obj.stack.includes(this.state.stack.toLowerCase());
    }
    return true;
  }

  render() {
    const filteredStack = ProjectData.data.filter(this.filterByStack);

    const renderStack: React.ReactNode = filteredStack.map((data, index) => (
      <div key={index} className={`project${index % 2 ? '' : ' gray-bg'}`}>
        <figure className="img-wrap">
          <img
            src={require(`../assets/img/project/${data.titleImg}`)}
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

    const noResult: React.ReactNode = (
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
