import React from 'react';

import aboutInfo from '../data/about.json';
import './About.scss';

const About = () => (
  <section className="about">
    <h1>Han Lee</h1>
    <div className="out-links">
      {aboutInfo['out-links'].map((data, index) => (
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
      {aboutInfo.location}
    </div>
  </section>
);

export default About;
