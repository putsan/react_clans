import { CREATE_CHARACTER, LOAD_CHARACTERS } from './types';

const initialState = {
  characters: [],
  loadedCharacters: [],
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters.character, action.payload],
      };
    case LOAD_CHARACTERS:
      return {
        ...state,
        loadedCharacters: action.payload,
      };
    default: return state;
  }
};
