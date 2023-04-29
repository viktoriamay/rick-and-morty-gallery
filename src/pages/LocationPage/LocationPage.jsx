import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";

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
    <div className="characters_cards__container" >
      <div >
      <h1>
      {locationPageInfo?.name}

      </h1>
      <p>{locationPageInfo?.id}</p>
      <p>{locationPageInfo?.created}</p>
      <p>{locationPageInfo?.type}</p>
      <p>{locationPageInfo?.dimension}</p>
      <p>{locationPageInfo?.residents?.length}</p>
      </div>

      {characters?.map((character) => (
        <CharacterCard
          character={character}
          key={`character-location-${character.id}`}
        />
      ))}
      {/* <div>{characters.name}</div> */}
    </div>
  );
};
