// About.js
import React from 'react';

const About = ({ title = "No title available", description = "No description available" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default About;
