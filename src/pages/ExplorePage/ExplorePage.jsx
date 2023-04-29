import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./ExplorePage.scss";
import { Search } from "../../components/Search/Search";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const ExplorePage = () => {
  
  const {setSearchQueryCharacters, setSearchQueryLocations, updatePageNumberLocations, updatePageNumberCharacters} = useContext(GalleryContext)

  const clearQuery = () => {
    setSearchQueryLocations('')
    setSearchQueryCharacters('')
  }

  return (
    <div className="explore_page">
      <div className="container">
        <div className="explore_page__container">
          <div className="explore_page__navlink_container">
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/characters"}
              onClick={clearQuery}
            >
              Персонажи
            </NavLink>
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/locations"}
              onClick={clearQuery}

            >
              Локации
            </NavLink>
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/episodes"}
              onClick={clearQuery}

            >
              Эпизоды
            </NavLink>
          </div>
          <Search />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
