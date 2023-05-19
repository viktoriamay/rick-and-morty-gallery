import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickMortyApi from "../../../utils/api/rickMortyApi";
import { CharacterCard } from "../../../components/Cards/CharacterCard";
import "../ResourcePage.scss";
import { BackButton } from "../../../components/BackButton/BackButton";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const EpisodePage = () => {
  const {t} = useContext(GalleryContext)
  const [episodePageInfo, setEpisodePageInfo] = useState({});

  let [characters, setCharacters] = useState([]);
  const params = useParams();

  useEffect(() => {
    RickMortyApi.getEpisodeByID(params.episodeID).then((data) => {
      setEpisodePageInfo(data);
    });
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

  return (
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
              <span className="resource_page__parameter">{t('airDate')}</span>
              <p className="resource_page__info">{episodePageInfo?.air_date}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('episode')}</span>
              <p className="resource_page__info">{episodePageInfo?.episode}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('createdAt')}</span>
              <p className="resource_page__info">{episodePageInfo?.created}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('characters')}</span>
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
  );
};
