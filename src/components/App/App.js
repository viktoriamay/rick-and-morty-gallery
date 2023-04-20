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

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [pageNumber, updatePageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");

  const [error, setError] = useState('');

// console.log(error.name);
  const debounceSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    const searchQuery = debounceSearchQuery;

    RickMortyApi.getCharacters(pageNumber, searchQuery, status, gender, species)
    .then((characters) => {
      setCharacters(characters.results);
      setInfo(characters.info);
    }).catch((error) => console.log(error)
    )
  }, [debounceSearchQuery, gender, pageNumber, species, status]);

  const valueContextProvider = {
    characters,
    setSearchQuery,
    pageNumber,
    updatePageNumber,
    info,
    status,
    updateStatus,
    updateGender,
    updateSpecies,
    error
  };

  return (
    <GalleryContext.Provider value={valueContextProvider}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/rick-and-morty-gallery" element={<MainPage />} />
        </Routes>

        <div className="main">
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
    </GalleryContext.Provider>
  );
}

export default App;
