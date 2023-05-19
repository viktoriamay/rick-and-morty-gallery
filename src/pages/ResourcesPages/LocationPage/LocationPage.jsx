import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickMortyApi from "../../../utils/api/rickMortyApi";
import { CharacterCard } from "../../../components/Cards/CharacterCard";
import "../ResourcePage.scss";
import { BackButton } from "../../../components/BackButton/BackButton";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const LocationPage = () => {
  const {t} = useContext(GalleryContext)
  const [locationPageInfo, setLocationPageInfo] = useState({});

  let [characters, setCharacters] = useState([]);
  const params = useParams();

  useEffect(() => {
    RickMortyApi.getLocationByID(params.locationID).then((data) => {
      setLocationPageInfo(data);
    });
  }, [params.locationID]);

  useEffect(() => {
    (async function () {
      if (locationPageInfo?.residents) {
        // добавляем проверку
        await Promise.all(
          locationPageInfo.residents.map((resident) => {
            return fetch(resident)
              .then((res) => res.json())
              .then((res) =>
                setCharacters((prevCharacters) => [...prevCharacters, res])
              );
          })
        );
      }
    })();
  }, [locationPageInfo?.residents]);

  return (
    <div className="resource_page">
      <div className="container">
      <BackButton />
        <p className="resource_page__title">
          {t('location')} #{locationPageInfo?.id} — {t('residentsInfo')}
        </p>
        <div className="resource_page__cards_container">
          <div className="resource_page__info_wrapper resource_page__info_wrapper_about">
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('title')}</span>
              <p className="resource_page__name">{locationPageInfo?.name}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('createdAt')}</span>

              <p className="resource_page__info">{locationPageInfo?.created}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('type')}</span>

              <p className="resource_page__info">{locationPageInfo?.type}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('dimension')}</span>

              <p className="resource_page__info">
                {locationPageInfo?.dimension}
              </p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">{t('residents')}</span>

              <p className="resource_page__info">
                {locationPageInfo?.residents?.length}
              </p>
            </div>
          </div>

          {characters?.map((character) => (
            <CharacterCard
              character={character}
              key={`character-location-${character.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
