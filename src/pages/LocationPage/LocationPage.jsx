import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { CharacterCard } from "../../components/Cards/CharacterCard";
import "./LocationPage.scss";

export const LocationPage = () => {
  const [locationPageInfo, setLocationPageInfo] = useState({});

  let [characters, setCharacters] = useState([]);
  const params = useParams();

  useEffect(() => {
    RickMortyApi.getLocationByID(params.locationID).then((data) => {
      setLocationPageInfo(data);
    });
  }, [params.locationID]);

  // useEffect(() => {
  //   (async function () {
  //     await Promise.all(
  //       locationPageInfo?.residents?.map((resident) => {
  //         return fetch(resident)
  //           .then((res) => res.json())
  //           .then((res) => setCharacters(prevcharacters => [...prevcharacters, res]));
  //       })
  //     );
  //   })();
  // }, [locationPageInfo?.residents]);

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
    <>
      
        <div className="container">
        <p className="location_page__about_title">
          Location #{locationPageInfo?.id} — Residents Info
        </p>
      <div className="search_page_cards__container">
          <div className="location_page__info">
            {/* <div className="location_page__info_item">
          <p className="location_page__data">Location #</p>

        </div> */}
            <div className="location_page__info_item">
              <p className="location_page__data">Name</p>
              <p className="location_page__name">{locationPageInfo?.name}</p>
            </div>
            <div className="location_page__info_item">
              <p className="location_page__data">Created at</p>

              <p className="location_page__about">
                {locationPageInfo?.created}
              </p>
            </div>
            <div className="location_page__info_item">
              <p className="location_page__data">Type</p>

              <p className="location_page__about">{locationPageInfo?.type}</p>
            </div>
            <div className="location_page__info_item">
              <p className="location_page__data">Dimension</p>

              <p className="location_page__about">
                {locationPageInfo?.dimension}
              </p>
            </div>
            <div className="location_page__info_item">
              <p className="location_page__data">Residents</p>

              <p className="location_page__about">
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
        {/* <div>{characters.name}</div> */}
        </div>
      </div>
    </>
  );
};
