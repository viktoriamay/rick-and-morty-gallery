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

  const [pageNumber, updatePageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   RickMortyApi.getCharactersList().then((characters) => {
  //     setCharacters(characters.results);
  //   });
  // }, []);

  const debounceSearchQuery = useDebounce(searchQuery, 1000);
  
  useEffect(() => {
    // const request = () =>

    RickMortyApi.getCharacters(pageNumber)
      .then((characters) => setCharacters(characters.results))
    // request()
    // .then(( pageNumber) => {
    // setSearchQuery(searchQuery);
    // updatePageNumber(pageNumber)
    // }
    // );
  }, [pageNumber]);


  const filteredCharactersRequest = () => {

    const searchQuery = debounceSearchQuery;

    RickMortyApi.searchCharacters(searchQuery)
    .then((filteredCharacters) => setCharacters(filteredCharacters.results));


  }
  useEffect(() => {
    filteredCharactersRequest();
  }, [debounceSearchQuery]);

  console.log(pageNumber);
  const valueContextProvider = { characters, setSearchQuery, updatePageNumber };

  return (
    <GalleryContext.Provider value={valueContextProvider}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/rick-and-morty-gallery" element={<MainPage />} />
        </Routes>

        <div className="main">
          <button onClick={() => updatePageNumber(pageNumber + 1)}>
            {pageNumber}
          </button>
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
