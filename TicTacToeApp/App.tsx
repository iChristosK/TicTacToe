import React from 'react';
import { Provider } from 'react-redux';
import { TicTacToe } from './src/components/TicTacToe';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
};

export default App;