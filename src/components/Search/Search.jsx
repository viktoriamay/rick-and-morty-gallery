import { TfiSearch } from "react-icons/tfi";
import "./Search.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { useLocation } from "react-router-dom";

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
  } = useContext(GalleryContext);

  const searchRequest = (e) => e.preventDefault();

  const location = useLocation();

  const searchQuery = (location, e) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        updatePageNumberCharacters(1);
        setSearchQueryCharacters(e.target.value);
        break;

      case "/rick-and-morty-gallery/explore/locations":
        updatePageNumberLocations(1);
        setSearchQueryLocations(e.target.value);
        break;

      case "/rick-and-morty-gallery/explore/episodes":
        updatePageNumberEpisodes(1);
        setSearchQueryEpisodes(e.target.value);
        break;

      default:
        return null;
    }
  };
  const valueInput = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return searchQueryCharacters;

      case "/rick-and-morty-gallery/explore/locations":
        return searchQueryLocations;

      case "/rick-and-morty-gallery/explore/episodes":
        return searchQueryEpisodes;

      default:
        return null;
    }
  };

  return (
    <form className="search__form">
      <div className="search__form_container">
        <input
          className="search__input"
          type="text"
          placeholder="Поиск"
          value={valueInput(location.pathname)}
          onChange={(e) => {
            searchQuery(location.pathname, e);
          }}
        />
        <button className="search__button" onClick={searchRequest}>
          <TfiSearch />
        </button>
      </div>
    </form>
  );
};
