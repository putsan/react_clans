import React, { useEffect, useMemo } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './ListOfClans.scss';
import { loadCharacters } from '../../redux/actions';
import { ListOfCharacters } from '../ListOfCharacters/ListOfCharacters';

const ListOfClans = React.memo(() => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.loadedCharacters);

  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  console.log(characters); // eslint-disable-line
  const charactersByClans = useMemo(characters.reduce((acc, character) => {
    console.log(character); // eslint-disable-line

    return {
      ...acc,
      character,
    };
  }, {}));

  return charactersByClans.map(({ id, charactersInClan }) => (
    <ListOfCharacters
      characters={charactersInClan}
      key={id}
    />
  ));
});

// const mapStateToProps = state => ({
//   allCharacters: state.characters.loadedCharacters,
// });

export default ListOfClans;

// ListOfClans.propTypes = {
//   allCharacters: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };
