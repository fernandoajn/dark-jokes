import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import { TiRefresh } from 'react-icons/ti';

import { Container, RefreshButton, JokeText } from '../styles/Joke';
import api from '../services/api';

const Joke: React.FC = () => {
  const [randomJoke, setRandomJoke] = useState<String>();
  const [punchline, setPunchline] = useState<String>();
  const [visiblePunchline, setVisiblePunchline] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadJoke = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.get('/', {
        params: {
          type: 'single',
        },
      });
      
      const { setup, punchline } = response.data;

      console.log(
        `${setup} -> ${punchline}`
      )

      setRandomJoke(setup);
      setPunchline(punchline);
      setVisiblePunchline(false);
    } catch (error) {
      setRandomJoke(`Error: ${error}`);
    }

    setLoading(false);
  };

  const showPunchline = () => {
    console.log(punchline);
    setVisiblePunchline(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleLoadJoke();
    }
  };

  useEffect(() => {
    handleLoadJoke();
  }, []);

  return (
    <Container tabIndex={0} onKeyPress={handleKeyPress}>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="mediumseagreen"
          height={40}
          width={40}
        />
      ) : (
        <div>
          <JokeText onClick={showPunchline}>{randomJoke}</JokeText>
          {visiblePunchline && <p>{punchline}</p>}
          {visiblePunchline &&
          <RefreshButton type="button" onClick={handleLoadJoke}>
            <TiRefresh size={40} />
          </RefreshButton>
          }
        </div>
      )}
    </Container>
  );
};

export default Joke;
