import { NavLink, Outlet } from "react-router-dom";
import "./ExplorePage.scss";
import { Search } from "../../components/Search/Search";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { BackButton } from "../../components/BackButton/BackButton";

export const ExplorePage = () => {
  const {
    setSearchQueryCharacters,
    setSearchQueryLocations,
    setSearchQueryEpisodes,
    updatePageNumberLocations,
    updatePageNumberCharacters,
    updatePageNumberEpisodes,
    updateStatus,
    updateGender,
    updateSpecies,
    updateEpisode,
    updateType,
    theme,
    t,
  } = useContext(GalleryContext);

  const clearQuery = () => {
    setSearchQueryLocations("");
    setSearchQueryCharacters("");
    setSearchQueryEpisodes("");
    updatePageNumberLocations(1);
    updatePageNumberCharacters(1);
    updatePageNumberEpisodes(1);
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updateEpisode("");
    updateType("");
  };

  return (
    <div className="explore_page">
      <div className="container">
        <BackButton />
        <div className="explore_page__container">
          <ul className="explore_page__navlink_container">
            <li>
              <NavLink
                className={`explore_page__navlink ${theme}`}
                to={"/explore/characters"}
                onClick={clearQuery}
              >
                {t("characters")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`explore_page__navlink ${theme}`}
                to={"/explore/locations"}
                onClick={clearQuery}
              >
                {t("locations")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`explore_page__navlink ${theme}`}
                to={"/explore/episodes"}
                onClick={clearQuery}
              >
                {t("episodes")}
              </NavLink>
            </li>
          </ul>
          <Search />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
