import React, { useState, useEffect } from 'react';

import api from '../services/api';

const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const handleLoadJoke = async (): Promise<void> => {
    const { data } = await api.get('/');
    const newJoke = data.joke;

    setJoke(newJoke);
  };

  useEffect(() => {
    handleLoadJoke();
  }, []);

  return (
    <>
      <strong>{joke}</strong>
    </>
  );
};

export default Joke;
