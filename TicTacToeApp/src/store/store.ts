import { configureStore } from '@reduxjs/toolkit';

import { gameReducer } from './reducers/gameReducer';

export const store = configureStore({
  reducer: gameReducer,
});

/* I am importing configureStore from redux-toolkit, as well as the gameReducer from the reducer folder.

I then use the configureStore function to create the store and pass in the gameReducer as the reducer property.

Then I exported the store so that it can be used in other parts of the app. */
