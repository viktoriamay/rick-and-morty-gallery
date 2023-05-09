import { useEffect, useState } from "react";
import RickMortyApi from "../../../utils/api/rickMortyApi";
import { Link, useParams } from "react-router-dom";
import "../ResourcePage.scss";
import { Accordion } from "../../../components/Accordion/Accordion";

export const CharacterPage = () => {
  const [characterPageInfo, setCharacterPageInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    RickMortyApi.getCharacterByID(params.characterID).then((data) => {
      setCharacterPageInfo(data);
    });
  }, [params.characterID]);

  const [episodes, setEpisodes] = useState([]);
  const [location, setLocation] = useState({});

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

  return (
    <div className="resource_page">
      <div className="container">
        <p className="resource_page__title">
          Профиль персонажа #{characterPageInfo?.id}
        </p>
        <div className="character_page__wrapper">
          <div className="character_page__img">
            <img
              src={characterPageInfo?.image}
              alt={`${characterPageInfo?.name}'s Avatar`}
            />
          </div>
          <div className="resource_page__info_wrapper">
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Name </span>
              <p className="resource_page__name">{characterPageInfo?.name}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Gender </span>
              <p className="resource_page__info">{characterPageInfo?.gender}</p>
            </div>

            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Status </span>
              <p className="resource_page__info">{characterPageInfo?.status}</p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Species </span>
              <p className="resource_page__info">
                {characterPageInfo?.species}
              </p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Created at </span>
              <p className="resource_page__info">
                {new Date(characterPageInfo?.created).toLocaleString("ru-ru")}
              </p>
            </div>
            <div className="resource_page__info_item">
              <span className="resource_page__parameter">Last location </span>
              <Link
                to={`/rick-and-morty-gallery/location/${location.id}`}
                className="resource_page__info resource_page__info_link"
              >
                {location.name}
              </Link>
            </div>
          </div>
        </div>
        <Accordion title="Episodes">
          {/* {episodes.map((episode) => (
            <Link to={`/rick-and-morty-gallery/episode/${episode.id}`}>
              {episode.name} #{episode.id}
            </Link>
          ))} */}
        </Accordion>
      </div>
    </div>
  );
};