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
import { useEffect, useState } from "react";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { GalleryContext } from "../../utils/context/GalleryContext";
import useDebounce from "../../hooks/useDebounce";
import { CharacterPage } from "../../pages/ResourcesPages/CharacterPage/CharacterPage";
import { LocationPage } from "../../pages/ResourcesPages/LocationPage/LocationPage";
import { EpisodePage } from "../../pages/ResourcesPages/EpisodePage/EpisodePage";
import { ArticlePage } from "../../pages/ArticlePage/ArticlePage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [infoCharacters, setInfoCharacters] = useState({});
  const [pageNumberCharacters, updatePageNumberCharacters] = useState(1);
  const [searchQueryCharacters, setSearchQueryCharacters] = useState("");
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");

  const debounceSearchQueryCharacters = useDebounce(
    searchQueryCharacters,
    1000
  );

  //////// locations

  const [locations, setLocations] = useState([]);
  const [infoLocations, setInfoLocations] = useState({});
  const [type, updateType] = useState("");
  const [dimension, updateDimension] = useState("");
  const [searchQueryLocations, setSearchQueryLocations] = useState("");

  const [pageNumberLocations, updatePageNumberLocations] = useState(1);

  const debounceSearchQueryLocations = useDebounce(searchQueryLocations, 1000);

  useEffect(() => {
    const searchQuery = debounceSearchQueryLocations;

    RickMortyApi.getLocations(pageNumberLocations, searchQuery, type, dimension)
      .then((locations) => {
        setLocations(locations.results);
        setInfoLocations(locations.info);
      })
      .catch(() => {
        setLocations([]);
      });
  }, [debounceSearchQueryLocations, dimension, pageNumberLocations, type]);
  /////////
  const [searchQueryEpisodes, setSearchQueryEpisodes] = useState("");

  const debounceSearchQueryEpisodes = useDebounce(searchQueryEpisodes, 1000);

  useEffect(() => {
    const searchQuery = debounceSearchQueryCharacters;

    RickMortyApi.getCharacters(
      pageNumberCharacters,
      searchQuery,
      status,
      gender,
      species
    )
      .then((characters) => {
        setCharacters(characters.results);
        setInfoCharacters(characters.info);
      })
      .catch(() => {
        setCharacters([]);
      });
  }, [
    debounceSearchQueryCharacters,
    gender,
    pageNumberCharacters,
    species,
    status,
  ]);

  const [episodes, setEpisodes] = useState([]);
  const [infoEpisodes, setInfoEpisodes] = useState({});
  const [episode, updateEpisode] = useState([]);
  const [pageNumberEpisodes, updatePageNumberEpisodes] = useState(1);

  useEffect(() => {
    const searchQuery = debounceSearchQueryEpisodes;

    RickMortyApi.getEpisodes(pageNumberEpisodes, searchQuery, episode)
      .then((episodes) => {
        setEpisodes(episodes.results);
        setInfoEpisodes(episodes.info);
      })
      .catch(() => {
        setEpisodes([]);
      });
  }, [debounceSearchQueryEpisodes, episode, pageNumberEpisodes]);

  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const valueContextProvider = {
    episode,
    updateEpisode,
    searchQueryEpisodes,
    setSearchQueryEpisodes,
    infoEpisodes,
    pageNumberEpisodes,
    updatePageNumberEpisodes,
    setInfoEpisodes,
    episodes,
    characters,
    setCharacters,
    setSearchQueryCharacters,
    pageNumberCharacters,
    updatePageNumberCharacters,
    infoCharacters,
    status,
    updateStatus,
    updateGender,
    updateSpecies,
    searchQueryCharacters,
    type,
    gender,
    setEpisodes,
    species,
    locations,
    setLocations,
    infoLocations,
    setInfoLocations,
    searchQueryLocations,
    setSearchQueryLocations,
    pageNumberLocations,
    updatePageNumberLocations,
    updateType,
    theme,
    handleThemeChange,
  };

  return (
    <GalleryContext.Provider value={valueContextProvider}>
      <div className={`App ${theme}`}>
        <Header />

        <Routes>
          <Route path="/rick-and-morty-gallery" element={<MainPage />} />
        </Routes>

        <main className="main">
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
              path="/rick-and-morty-gallery/character/:characterID"
              element={<CharacterPage />}
            />
            <Route
              path="/rick-and-morty-gallery/location/:locationID"
              element={<LocationPage />}
            />
            <Route
              path="/rick-and-morty-gallery/episode/:episodeID"
              element={<EpisodePage />}
            />

            <Route
              path="/rick-and-morty-gallery/statistics"
              element={<StatisticsPage />}
            />
            <Route path="/rick-and-morty-gallery/news" element={<NewsPage />} />
            <Route
              path="/rick-and-morty-gallery/news/:articleID"
              element={<ArticlePage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </GalleryContext.Provider>
  );
}

export default App;
