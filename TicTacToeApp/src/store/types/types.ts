export interface TicTacToeGame {
  board: string[][];
  currentPlayer: PlayerType;
  winner: string | null;
}

export interface PlaceMark {
  row: number;
  col: number;
}

export type PlayerType = 'X' | 'O';

export type Pokemon = {
  name: string;
  url: string;
};

export interface GameState {
  game: TicTacToeGame;
  pokemonApi: {
    config: {
      focused: boolean;
      keepUnusedDataFor: number;
      middlewareRegistered: boolean;
      online: boolean;
      reducerPath: string;
      refetchOnFocus: boolean;
      refetchOnMountOrArgChange: boolean;
      refetchOnReconnect: boolean;
    };
    mutations: Record<string, unknown>; // You can define this based on your API mutations
    provided: Record<string, unknown>; // You can define this based on your API provided data
    queries: {
      getPokemonByName: {
        data: Record<string, unknown>; // Define this based on the actual data structure
      };
    };
    subscriptions: {
      getPokemonByName: {
        data: Record<string, unknown>; // Define this based on the actual data structure
      };
    };
  };
}
