import '../ResourcePage.scss';
import { useContext, useEffect, useState } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Link, useParams } from 'react-router-dom';
import RickMortyApi from '../../../utils/api/rickMortyApi';
import { BackButton } from '../../../components/BackButton/BackButton';
import { Spinner } from '../../../components/Spinner/Spinner';
import { NotFoundPage } from '../../NotFoundPage/NotFoundPage';

export const CharacterPage = () => {
  const { t, loading, setLoading, notFound, setNotFound } =
    useContext(GalleryContext);

  const [characterPageInfo, setCharacterPageInfo] = useState({});
  const params = useParams();

  const [showAll, setShowAll] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [location, setLocation] = useState({});

  const toggleShowAll = () => {
    setShowAll((showAll) => !showAll);
  };

  useEffect(() => {
    setLoading(true);
    RickMortyApi.getCharacterByID(params.characterID)
      .then((data) => {
        setCharacterPageInfo(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [params.characterID]);

  useEffect(() => {
    (async function () {
      if (characterPageInfo?.episode) {
        // добавляем проверку
        await Promise.all(
          characterPageInfo.episode.map((episode) => {
            return fetch(episode)
              .then((res) => res.json())
              .then((res) =>
                setEpisodes((prevEpisodes) => [...prevEpisodes, res])
              );
          })
        );
      }
    })();
  }, [characterPageInfo.episode]);

  useEffect(() => {
    if (characterPageInfo?.location?.url) {
      fetch(characterPageInfo.location.url)
        .then((res) => res.json())
        .then((res) => setLocation(res));
    }
  }, [characterPageInfo.location]);

  if (notFound) return <NotFoundPage />;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="resource_page">
          <div className="container">
            <BackButton />
            <p className="resource_page__title">
              {t('characterProfile')} #{characterPageInfo?.id}
            </p>
            <div className="acc">
              <div className="character_page__wrapper">
                <div className="character_page__img">
                  <img
                    src={characterPageInfo?.image}
                    alt={`${characterPageInfo?.name}'s Avatar`}
                  />
                </div>
                <div className="resource_page__info_wrapper">
                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('name')}
                    </span>
                    <p className="resource_page__name">
                      {characterPageInfo?.name}
                    </p>
                  </div>
                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('gender')}{' '}
                    </span>
                    <p className="resource_page__info">
                      {characterPageInfo?.gender}
                    </p>
                  </div>

                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('status')}
                    </span>
                    <p className="resource_page__info">
                      {characterPageInfo?.status}
                    </p>
                  </div>
                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('species')}
                    </span>
                    <p className="resource_page__info">
                      {characterPageInfo?.species}
                    </p>
                  </div>
                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('createdAt')}
                    </span>
                    <p className="resource_page__info">
                      {new Date(characterPageInfo?.created).toLocaleString(
                        'ru-ru'
                      )}
                    </p>
                  </div>
                  <div className="resource_page__info_item">
                    <span className="resource_page__parameter">
                      {t('lastLocation')}
                    </span>
                    <Link
                      to={`/location/${location.id}`}
                      className="resource_page__info resource_page__info_link"
                    >
                      {location.name}
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="resource_page__info_wrapper">
                  <div className="resource_page__info_item">
                    <p className="resource_page__name">
                      {t('episodesWithCharacter')}:{' '}
                      {characterPageInfo?.episode?.length}
                    </p>
                  </div>
                  {episodes
                    .map((episode) => (
                      <div
                        className="resource_page__info_item"
                        key={episode?.id}
                      >
                        <span className="resource_page__parameter">{`${t(
                          'episode'
                        )} #${episode.id}`}</span>
                        <Link
                          className="resource_page__info resource_page__info_link"
                          to={`/episode/${episode.id}`}
                        >
                          {episode.name}
                        </Link>
                      </div>
                    ))
                    .slice(0, showAll ? episodes.length : 5)}
                  {characterPageInfo?.episode?.length > 5 && (
                    <button
                      className="character_page__button"
                      onClick={toggleShowAll}
                    >
                      {showAll ? t('hideAll') : t('showAll')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
