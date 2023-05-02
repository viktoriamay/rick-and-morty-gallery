import { TfiSearch } from "react-icons/tfi";
import "./Search.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const {
    updatePageNumber,
    setSearchQueryCharacters,
    setSearchQueryLocations,setSearchQueryEpisodes
  } = useContext(GalleryContext);

  const searchRequest = (e) => e.preventDefault();

  const location = useLocation();

  const searchQuery = (location, e) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return setSearchQueryCharacters(e.target.value);
      case "/rick-and-morty-gallery/explore/locations":
        return setSearchQueryLocations(e.target.value);
      case "/rick-and-morty-gallery/explore/episodes":
        return setSearchQueryEpisodes(e.target.value);

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
          onChange={(e) => {
            // updatePageNumber(1);
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
