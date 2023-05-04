import { useContext } from "react";
import "./SearchInfo.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { useLocation } from "react-router-dom";

export const SearchInfo = () => {
  const {
    searchQueryCharacters,
    searchQueryEpisodes,
    searchQueryLocations,
    type,
    status,
    gender,
    species,
    infoCharacters,
    characters,
    infoLocations,
    infoEpisodes,
    episodes,
    locations,
  } = useContext(GalleryContext);

  const location = useLocation();

  const searchText = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return (
          (searchQueryCharacters || status || gender || species) &&
          characters?.length !== 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryCharacters}
              </span>{" "}
              найдено персонажей:{" "}
              <span className="search_info__request">
                {infoCharacters?.count}
              </span>
            </div>
          )
        );

      case "/rick-and-morty-gallery/explore/locations":
        return (
          (searchQueryLocations || type) &&
          locations?.length !== 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryLocations}
              </span>{" "}
              найдено локаций:{" "}
              <span className="search_info__request">
                {infoLocations?.count}
              </span>
            </div>
          )
        );
      case "/rick-and-morty-gallery/explore/episodes":
        return (
          searchQueryEpisodes &&
          episodes?.length !== 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryEpisodes}
              </span>{" "}
              найдено эпизодов:{" "}
              <span className="search_info__request">
                {infoEpisodes?.count}
              </span>
            </div>
          )
        );

      default:
        break;
    }
  };

  const searchCards = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return (
          characters?.length === 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryCharacters}
              </span>{" "}
              персонажей не найдено
            </div>
          )
        );

      case "/rick-and-morty-gallery/explore/locations":
        return (
          locations?.length === 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryLocations}
              </span>{" "}
              локаций не найдено
            </div>
          )
        );

      case "/rick-and-morty-gallery/explore/episodes":
        return (
          episodes?.length === 0 && (
            <div className="search_info">
              По запросу{" "}
              <span className="search_info__request">
                {" "}
                {searchQueryEpisodes}
              </span>{" "}
              эпизодов не найдено
            </div>
          )
        );

      default:
        break;
    }
  };

  return (
    <>
      {searchText(location.pathname)}

      {searchCards(location.pathname)}
    </>
  );
};
