import React, { useEffect, useState } from 'react';
import './App.scss';
import ListOfClans from './components/ListOfClans/ListOfClans';

export const App = () => {
  const [responce, setResponce] = useState(0);

  useEffect(() => {
    // const socket = new WebSocket('ws://testapi.marit.expert:3004');

    // socket.onopen = (e) => {
    //   socket.send({ cmd: 'get_list' });
    // };

    // socket.onmessage = (message) => {
    //   setResponce(message.data);
    // };

    // socket.onerror = (error) => {
    //   console.log(`[error] ${error.message}`); // eslint-disable-line
    // };
  }, []);

  return (
    <ListOfClans />
  );
};
