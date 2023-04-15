import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { SearchCharactersPage } from "./SearchCharactersPage/SearchCharactersPage";
import { SearchLocationsPage } from "./SearchLocationsPage/SearchLocationsPage";
import { SearchEpisodesPage } from "./SearchEpisodesPage/SearchEpisodesPage";
import './ExplorePage.scss'
export const ExplorePage = ({children}) => {
  return (
    <div>
    HUUIFVFNVIFN
      <NavLink to={"/rick-and-morty-gallery/explore/characters"}>CHAR</NavLink>
      <NavLink to={"/rick-and-morty-gallery/explore/locations"}>LOC</NavLink>
      <NavLink to={"/rick-and-morty-gallery/explore/episodes"}>EPI</NavLink>
      {children}
      <Outlet />
      {/* <Routes>
        <Route
          path="/characters"
          element={<SearchCharactersPage />}
        />
        <Route
          path="/locations"
          element={<SearchLocationsPage />}
        />
        <Route
          path="/episodes"
          element={<SearchEpisodesPage />}
        />
      </Routes> */}
      {/* <SearchCharactersPage />
<SearchLocationsPage />
<SearchEpisodesPage /> */}
    </div>
  );
};


