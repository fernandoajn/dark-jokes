import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';
import { TiRefresh } from 'react-icons/ti';

import { Container, RefreshButton } from '../styles/Joke';
import api from '../services/api';

const Joke: React.FC = () => {
  const [randomJoke, setRandomJoke] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadJoke = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.get('/', {
        params: {
          type: 'single',
        },
      });

      const { joke } = response.data;

      setRandomJoke(joke);
    } catch (error) {
      setRandomJoke(`Error: ${error}`);
    }

    setLoading(false);
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
          <p>{randomJoke}</p>
          <RefreshButton type="button" onClick={handleLoadJoke}>
            <TiRefresh size={40} />
          </RefreshButton>
        </div>
      )}
    </Container>
  );
};

export default Joke;
