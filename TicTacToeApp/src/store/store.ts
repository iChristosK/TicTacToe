import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import { pokemonApi } from '../services/pokemon';
import { gameReducer } from './reducers/gameReducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* I am importing configureStore from redux-toolkit, as well as the gameReducer from the reducer folder.
I then use the configureStore function to create the store and pass in the gameReducer as the reducer property.
Then I exported the store so that it can be used in other parts of the app. */
