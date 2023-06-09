import './SearchInfo.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';
import { useLocation } from 'react-router-dom';

export const SearchInfo = () => {
  const {
    searchQueryCharacters,
    searchQueryEpisodes,
    searchQueryLocations,
    type,
    status,
    gender,
    species,
    infoCharacters,
    characters,
    infoLocations,
    infoEpisodes,
    episodes,
    locations,
    t,
  } = useContext(GalleryContext);

  const location = useLocation();

  const searchText = (location) => {
    switch (location) {
      case '/explore/characters':
        return (
          (searchQueryCharacters || status || gender || species) &&
          characters?.length !== 0 && (
            <div className="search_info">
              {t('forRequest')}{' '}
              <span className="search_info__request">
                {' '}
                {searchQueryCharacters}
              </span>{' '}
              {t('charactersFound')}:{' '}
              <span className="search_info__request">
                {infoCharacters?.count}
              </span>
            </div>
          )
        );

      case '/explore/locations':
        return (
          (searchQueryLocations || type) &&
          locations?.length !== 0 && (
            <div className="search_info">
              {t('forRequest')}
              <span className="search_info__request">
                {' '}
                {searchQueryLocations}
              </span>{' '}
              {t('locationsFound')}:{' '}
              <span className="search_info__request">
                {infoLocations?.count}
              </span>
            </div>
          )
        );

      case '/explore/episodes':
        return (
          searchQueryEpisodes &&
          episodes?.length !== 0 && (
            <div className="search_info">
              {t('forRequest')}
              <span className="search_info__request">
                {' '}
                {searchQueryEpisodes}
              </span>{' '}
              {t('episodesFound')}:{' '}
              <span className="search_info__request">
                {infoEpisodes?.count}
              </span>
            </div>
          )
        );

      default:
        break;
    }
  };

  const searchCards = (location) => {
    switch (location) {
      case '/explore/characters':
        return (
          characters?.length === 0 && (
            <div className="search_info">
              {t('forRequest')}
              <span className="search_info__request">
                {' '}
                {searchQueryCharacters}
              </span>{' '}
              {t('charactersNotFound')}
            </div>
          )
        );

      case '/explore/locations':
        return (
          locations?.length === 0 && (
            <div className="search_info">
              {t('forRequest')}
              <span className="search_info__request">
                {' '}
                {searchQueryLocations}
              </span>{' '}
              {t('locationsNotFound')}
            </div>
          )
        );

      case '/explore/episodes':
        return (
          episodes?.length === 0 && (
            <div className="search_info">
              {t('forRequest')}{' '}
              <span className="search_info__request">
                {' '}
                {searchQueryEpisodes}
              </span>{' '}
              {t('episodesNotFound')}
            </div>
          )
        );

      default:
        break;
    }
  };

  return (
    <>
      {searchText(location.pathname)}
      {searchCards(location.pathname)}
    </>
  );
};
