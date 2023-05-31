import './Search.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';
import { useLocation } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';

export const Search = () => {
  const {
    updatePageNumberCharacters,
    updatePageNumberLocations,
    updatePageNumberEpisodes,
    setSearchQueryCharacters,
    setSearchQueryLocations,
    setSearchQueryEpisodes,
    searchQueryCharacters,
    searchQueryLocations,
    searchQueryEpisodes,
    t,
  } = useContext(GalleryContext);

  const searchRequest = (e) => e.preventDefault();

  const location = useLocation();

  const searchQuery = (location, e) => {
    switch (location) {
      case '/explore/characters':
        updatePageNumberCharacters(1);
        setSearchQueryCharacters(e.target.value);
        break;

      case '/explore/locations':
        updatePageNumberLocations(1);
        setSearchQueryLocations(e.target.value);
        break;

      case '/explore/episodes':
        updatePageNumberEpisodes(1);
        setSearchQueryEpisodes(e.target.value);
        break;

      default:
        return null;
    }
  };

  const valueInput = (location) => {
    switch (location) {
      case '/explore/characters':
        return searchQueryCharacters;

      case '/explore/locations':
        return searchQueryLocations;

      case '/explore/episodes':
        return searchQueryEpisodes;

      default:
        return null;
    }
  };

  return (
    <form className="search__form">
      <input
        maxLength={40}
        className="search__input"
        type="text"
        placeholder={t('search')}
        value={valueInput(location.pathname)}
        onChange={(e) => {
          searchQuery(location.pathname, e);
        }}
      />
      <button className="search__button" onClick={searchRequest}>
        <TfiSearch />
      </button>
    </form>
  );
};
