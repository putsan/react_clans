import React from 'react';
import PropTypes from 'prop-types';
import './ListOfCharacters.scss';

export const ListOfCharacters = React.memo(({ characters }) => (
  characters.map(character => (
    <h2>
      {character}
    </h2>
  ))
));

ListOfCharacters.propTypes = {
  characters: PropTypes.shape(PropTypes.object).isRequired,
};
