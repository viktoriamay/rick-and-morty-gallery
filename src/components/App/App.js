import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./App.scss";
import { StatisticsPage } from "../../pages/StatisticsPage/StatisticsPage";
import { ExplorePage } from "./../../pages/ExplorePage/ExplorePage";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { SearchCharactersPage } from "../../pages/ExplorePage/SearchCharactersPage/SearchCharactersPage";
import { SearchLocationsPage } from "../../pages/ExplorePage/SearchLocationsPage/SearchLocationsPage";
import { SearchEpisodesPage } from "../../pages/ExplorePage/SearchEpisodesPage/SearchEpisodesPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/rick-and-morty-gallery" element={<MainPage />} />
      </Routes>

      <div className="main container">
        <Routes>
          <Route
            path="/rick-and-morty-gallery/explore"
            element={
              <Navigate to="/rick-and-morty-gallery/explore/characters" />
            }
          />
          <Route
            path="/rick-and-morty-gallery/explore/*"
            element={<ExplorePage />}
          >
            <Route path="characters" element={<SearchCharactersPage />} />
            <Route path="locations" element={<SearchLocationsPage />} />
            <Route path="episodes" element={<SearchEpisodesPage />} />
          </Route>
          <Route
            path="/rick-and-morty-gallery/statistics"
            element={<StatisticsPage />}
          />
          <Route path="/rick-and-morty-gallery/news" element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
