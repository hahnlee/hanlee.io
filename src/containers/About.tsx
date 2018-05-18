import * as React from 'react';

import { AboutData } from '../data/about';
import './About.scss';

const About: React.SFC<{}> = () => (
  <section className="about">
    <h1>Han Lee</h1>
    <div className="out-links">
      {AboutData.outLinks.map((data, index) => (
        <a key={index} href={data.link} target="_blink">
          <img
            src={require(`../assets/img/feather/${data.logo}.svg`)}
            alt={data.logo}
          />
        </a>
      ))}
    </div>
    <div className="location-info">
      <img
        src={require('../assets/img/feather/map-pin.svg')}
        alt="map"
      />
      {AboutData.location}
    </div>
  </section>
);

export default About;
