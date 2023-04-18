import { Link, NavLink, Outlet, Route, Routes, useLocation} from "react-router-dom";
import { SearchCharactersPage } from "./SearchCharactersPage/SearchCharactersPage";
import { SearchLocationsPage } from "./SearchLocationsPage/SearchLocationsPage";
import { SearchEpisodesPage } from "./SearchEpisodesPage/SearchEpisodesPage";
import "./ExplorePage.scss";
import { Search } from "../../components/Search/Search";
export const ExplorePage = () => {

  const location = useLocation();

  const res = location.pathname.split('/');
  const w = res[res.length - 1];
  const j = w.replace(w[0], w[0].toUpperCase())


  return (
    <div className="explore_page">
      <div className="container">
        <div className="explore_page__container">
        {/* <h2>{j}</h2> */}
          <div className="explore_page__navlink_container">
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/characters"}
            >
              Персонажи
            </NavLink>
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/locations"}
            >
              Локации
            </NavLink>
            <NavLink
              className="explore_page__navlink"
              to={"/rick-and-morty-gallery/explore/episodes"}
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
