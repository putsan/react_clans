import { CREATE_CHARACTER, LOAD_CHARACTERS } from './types';

export function createCharacter(character) {
  return {
    type: CREATE_CHARACTER,
    payload: character,
  };
}

export function loadCharacters() {
  return (dispatch) => {
    const socket = new WebSocket('ws://testapi.marit.expert:3004');

    socket.onopen = (e) => {
      socket.send({ cmd: 'get_list' });
    };

    socket.onmessage = (message) => {
      dispatch({
        type: LOAD_CHARACTERS,
        payload: message.data,
      });
    };

    socket.onerror = (error) => {
      console.log(`[error] ${error.message}`); // eslint-disable-line
    };
  };
}
