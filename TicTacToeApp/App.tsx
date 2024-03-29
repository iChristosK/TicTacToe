import React from 'react';
import { Provider } from 'react-redux';

import { TicTacToe } from './src/components/organisms/TicTacToe/TicTacToe';
import { store } from './src/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
};
