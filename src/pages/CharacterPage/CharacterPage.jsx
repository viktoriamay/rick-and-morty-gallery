import { useEffect, useState } from "react"
import RickMortyApi from "../../utils/api/rickMortyApi";
import { useParams } from "react-router-dom";
import './CharacterPage.scss';
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";


export const CharacterPage = () => {

  const [characterPageInfo, setCharacterPageInfo] = useState({});
  console.log({characterPageInfo});
  const params = useParams()
console.log({params});

  useEffect(() => {
    RickMortyApi.getCharacterByID(params.characterID).then((data) => {
      setCharacterPageInfo(data);
    })
  }, [params.characterID]);

  const [episodes, setEpisodes] = useState([])

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


  return (
    <div>
       Character number {params.characterID}

       <img src={characterPageInfo?.image} alt="" />
       <h1>{characterPageInfo?.name}</h1>
       <p>{characterPageInfo?.gender}</p>
       <p>{characterPageInfo?.status}</p>
       <p>{characterPageInfo?.species}</p>
       <p>{characterPageInfo?.created}</p>
       <p>{characterPageInfo?.location?.name}</p>

       {/* {characterPageInfo?.episode?.map((ep) => <p>{ep}</p>)} */}
{episodes.map((episode) => <div>{episode.name}</div>)}

    </div>
  )
}