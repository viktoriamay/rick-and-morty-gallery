import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.scss';
import { StatisticsPage } from '../../pages/StatisticsPage/StatisticsPage';
import { ExplorePage } from './../../pages/ExplorePage/ExplorePage';
import { NewsPage } from '../../pages/NewsPage/NewsPage';
import { SearchCharactersPage } from '../../pages/ExplorePage/SearchCharactersPage/SearchCharactersPage';
import { SearchLocationsPage } from '../../pages/ExplorePage/SearchLocationsPage/SearchLocationsPage';
import { SearchEpisodesPage } from '../../pages/ExplorePage/SearchEpisodesPage/SearchEpisodesPage';
import { useEffect, useState } from 'react';
import RickMortyApi from '../../utils/api/rickMortyApi';
import { GalleryContext } from '../../utils/context/GalleryContext';
import useDebounce from '../../hooks/useDebounce';
import { CharacterPage } from '../../pages/ResourcesPages/CharacterPage/CharacterPage';
import { LocationPage } from '../../pages/ResourcesPages/LocationPage/LocationPage';
import { EpisodePage } from '../../pages/ResourcesPages/EpisodePage/EpisodePage';
import { ArticlePage } from '../../pages/ArticlePage/ArticlePage';
import { useTranslation } from 'react-i18next';
import { AboutProject } from '../../pages/AboutProject/AboutProject';
import { AboutRM } from '../../pages/AboutRM/AboutRM';

function App() {
  const [characters, setCharacters] = useState([]);
  const [infoCharacters, setInfoCharacters] = useState({});
  const [pageNumberCharacters, updatePageNumberCharacters] = useState(1);
  const [searchQueryCharacters, setSearchQueryCharacters] = useState('');
  const [status, updateStatus] = useState('');
  const [gender, updateGender] = useState('');
  const [species, updateSpecies] = useState('');

  const debounceSearchQueryCharacters = useDebounce(
    searchQueryCharacters,
    1000
  );

  //////// locations

  const [locations, setLocations] = useState([]);
  const [infoLocations, setInfoLocations] = useState({});
  const [type, updateType] = useState('');
  const [dimension, updateDimension] = useState('');
  const [searchQueryLocations, setSearchQueryLocations] = useState('');

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
  const [searchQueryEpisodes, setSearchQueryEpisodes] = useState('');

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

  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const { t, i18n } = useTranslation();

  // const [lang, setLang] = useState('ru');
  const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'ru');

  const changeLanguage = () => {
    // const lang = localStorage.getItem('lang') ?? 'ru';
    const newLang = lang === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang);
    setLang(newLang)
    // localStorage.setItem('lang', newLang);
  }
  // const changeLanguage = () => {
  //   // const lang = localStorage.getItem('lang') ?? 'ru';
  //   const newLang = lang === 'ru' ? 'en' : 'ru'
  //   i18n.changeLanguage(newLang);
  //   setLang(newLang)
  //   localStorage.setItem('lang', newLang);
  // }

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

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
    t,
    lang,
    setLang,
    changeLanguage,
  };

  return (
    <GalleryContext.Provider value={valueContextProvider}>
      <div className={`App ${theme}`}>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>

        <main className="main">
          <Routes>
            <Route
              path="/explore"
              element={<Navigate to="/explore/characters" />}
            />
            <Route path="/explore/*" element={<ExplorePage />}>
              <Route path="characters" element={<SearchCharactersPage />} />
              <Route path="locations" element={<SearchLocationsPage />} />
              <Route path="episodes" element={<SearchEpisodesPage />} />
            </Route>
            <Route path="/character/:characterID" element={<CharacterPage />} />
            <Route path="/location/:locationID" element={<LocationPage />} />
            <Route path="/episode/:episodeID" element={<EpisodePage />} />

            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:articleID" element={<ArticlePage />} />
            <Route path="/about-project" element={<AboutProject />} />
            <Route path="/about-rick-and-morty" element={<AboutRM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GalleryContext.Provider>
  );
}

export default App;
