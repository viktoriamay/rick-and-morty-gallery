import './App.scss';
import '../../assets/SCSS/theme.scss';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { GalleryContext } from '../../utils/context/GalleryContext';
import RickMortyApi from '../../utils/api/rickMortyApi';
import { Header } from '../Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Footer } from '../Footer/Footer';
import { StatisticsPage } from '../../pages/StatisticsPage/StatisticsPage';
import { ExplorePage } from './../../pages/ExplorePage/ExplorePage';
import { NewsPage } from '../../pages/NewsPage/NewsPage';
import { SearchCharactersPage } from '../../pages/ExplorePage/SearchCharactersPage/SearchCharactersPage';
import { SearchLocationsPage } from '../../pages/ExplorePage/SearchLocationsPage/SearchLocationsPage';
import { SearchEpisodesPage } from '../../pages/ExplorePage/SearchEpisodesPage/SearchEpisodesPage';
import { CharacterPage } from '../../pages/ResourcesPages/CharacterPage/CharacterPage';
import { LocationPage } from '../../pages/ResourcesPages/LocationPage/LocationPage';
import { EpisodePage } from '../../pages/ResourcesPages/EpisodePage/EpisodePage';
import { ArticlePage } from '../../pages/ArticlePage/ArticlePage';
import { AboutProject } from '../../pages/AboutPages/AboutProject';
import { AboutRM } from '../../pages/AboutPages/AboutRM';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
  const [width, setWidth] = useState(window.innerWidth);
  const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'ru');

  const [characters, setCharacters] = useState([]);
  const [infoCharacters, setInfoCharacters] = useState({});
  const [pageNumberCharacters, updatePageNumberCharacters] = useState(1);
  const [searchQueryCharacters, setSearchQueryCharacters] = useState('');
  const [status, updateStatus] = useState('');
  const [gender, updateGender] = useState('');
  const [species, updateSpecies] = useState('');

  const [locations, setLocations] = useState([]);
  const [infoLocations, setInfoLocations] = useState({});
  const [pageNumberLocations, updatePageNumberLocations] = useState(1);
  const [searchQueryLocations, setSearchQueryLocations] = useState('');
  const [type, updateType] = useState('');
  const [dimension, updateDimension] = useState('');

  const [episodes, setEpisodes] = useState([]);
  const [infoEpisodes, setInfoEpisodes] = useState({});
  const [pageNumberEpisodes, updatePageNumberEpisodes] = useState(1);
  const [searchQueryEpisodes, setSearchQueryEpisodes] = useState('');
  const [episode, updateEpisode] = useState([]);

  const [newsData, setNewsData] = useState([]);

  const debounceSearchQueryCharacters = useDebounce(
    searchQueryCharacters,
    1000
  );
  const debounceSearchQueryLocations = useDebounce(searchQueryLocations, 1000);
  const debounceSearchQueryEpisodes = useDebounce(searchQueryEpisodes, 1000);

  // characters
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
      })
      .finally(() => setLoading(false));
  }, [
    debounceSearchQueryCharacters,
    gender,
    pageNumberCharacters,
    species,
    status,
  ]);

  // locations
  useEffect(() => {
    const searchQuery = debounceSearchQueryLocations;

    RickMortyApi.getLocations(pageNumberLocations, searchQuery, type, dimension)
      .then((locations) => {
        setLocations(locations.results);
        setInfoLocations(locations.info);
      })
      .catch(() => {
        setLocations([]);
      })
      .finally(() => setLoading(false));
  }, [debounceSearchQueryLocations, dimension, pageNumberLocations, type]);

  // episodes
  useEffect(() => {
    const searchQuery = debounceSearchQueryEpisodes;

    RickMortyApi.getEpisodes(pageNumberEpisodes, searchQuery, episode)
      .then((episodes) => {
        setEpisodes(episodes.results);
        setInfoEpisodes(episodes.info);
      })
      .catch(() => {
        setEpisodes([]);
      })
      .finally(() => setLoading(false));
  }, [debounceSearchQueryEpisodes, episode, pageNumberEpisodes]);

  // theme
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // language
  const changeLanguage = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // window size
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // news
  useEffect(() => {
    setLoading(true);
    RickMortyApi.getPosts()
      .then((newsData) => {
        setNewsData(newsData.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

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
    loading,
    setLoading,
    notFound,
    setNotFound,
    width,
    setWidth,
    newsData,
    setNewsData,
  };

  return (
    <GalleryContext.Provider value={valueContextProvider}>
      <div className={`App ${theme}`}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GalleryContext.Provider>
  );
}

export default App;
