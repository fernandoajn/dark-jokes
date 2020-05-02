import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';

import { Container } from '../styles/Joke';
import api from '../services/api';

const Joke: React.FC = () => {
  const [randomJoke, setRandomJoke] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadJoke = async (): Promise<void> => {
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

  useEffect(() => {
    handleLoadJoke();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="lightslategray"
          height={40}
          width={40}
        />
      ) : (
        <p>{randomJoke}</p>
      )}
    </Container>
  );
};

export default Joke;
