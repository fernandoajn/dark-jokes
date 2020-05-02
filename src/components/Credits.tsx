import React from 'react';

import { Footer } from '../styles/Credits';

const Credits: React.FC = () => {
  return (
    <Footer>
      <p>
        <a href="https://github.com/fernandoajn">@fernandoajn</a>
        <span>・</span>
        <a href="https://github.com/Sv443/JokeAPI">JokeAPI</a>
      </p>
    </Footer>
  );
};

export default Credits;
