import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";


export const EpisodePage = () => {
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
    <div>
       EpPage
       {characters.map((character) => <CharacterCard character={character} />)}
    </div>
  )
}