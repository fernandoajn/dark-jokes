import React from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import GlobalStyle from './styles/global';
import { AppContainer } from './styles/App';

import Joke from './components/Joke';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Joke />
      </AppContainer>
    </>
  );
};

export default App;
