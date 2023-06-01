import '../ResourcePage.scss';
import { useContext, useEffect, useState } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { useParams } from 'react-router-dom';
import RickMortyApi from '../../../utils/api/rickMortyApi';
import { CharacterCard } from '../../../components/Cards/CharacterCard';
import { BackButton } from '../../../components/BackButton/BackButton';
import { Spinner } from '../../../components/Spinner/Spinner';
import { NotFoundPage } from '../../NotFoundPage/NotFoundPage';

export const EpisodePage = () => {
  const { t, notFound, setNotFound, loading, setLoading } =
    useContext(GalleryContext);

  const params = useParams();

  const [episodePageInfo, setEpisodePageInfo] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    RickMortyApi.getEpisodeByID(params.episodeID)
      .then((data) => {
        setEpisodePageInfo(data);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [params.episodeID]);

  useEffect(() => {
    (async function () {
      if (episodePageInfo?.characters) {
        // добавляем проверку
        await Promise.all(
          episodePageInfo.characters.map((resident) => {
            return fetch(resident)
              .then((res) => res.json())
              .then((res) =>
                setCharacters((prevCharacters) => [...prevCharacters, res])
              );
          })
        );
      }
    })();
  }, [episodePageInfo?.characters]);

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
              {t('episode')} #{episodePageInfo?.id} — {t('charactersInfo')}
            </p>
            <div className="resource_page__cards_container">
              <div className="resource_page__info_wrapper resource_page__info_wrapper_about">
                <div className="resource_page__info_item">
                  <span className="resource_page__parameter">{t('title')}</span>
                  <p className="resource_page__name">{episodePageInfo?.name}</p>
                </div>
                <div className="resource_page__info_item">
                  <span className="resource_page__parameter">
                    {t('airDate')}
                  </span>
                  <p className="resource_page__info">
                    {episodePageInfo?.air_date}
                  </p>
                </div>
                <div className="resource_page__info_item">
                  <span className="resource_page__parameter">
                    {t('episode')}
                  </span>
                  <p className="resource_page__info">
                    {episodePageInfo?.episode}
                  </p>
                </div>
                <div className="resource_page__info_item">
                  <span className="resource_page__parameter">
                    {t('createdAt')}
                  </span>
                  <p className="resource_page__info">
                    {new Date(episodePageInfo?.created).toLocaleString('ru-ru')}
                  </p>
                </div>
                <div className="resource_page__info_item">
                  <span className="resource_page__parameter">
                    {t('characters')}
                  </span>
                  <p className="resource_page__info">
                    {episodePageInfo?.characters?.length}
                  </p>
                </div>
              </div>

              {characters?.map((character) => (
                <CharacterCard
                  character={character}
                  key={`character-episode-${character.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
