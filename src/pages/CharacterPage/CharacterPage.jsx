import { useEffect, useState } from "react"
import RickMortyApi from "../../utils/api/rickMortyApi";
import { useParams } from "react-router-dom";
import './CharacterPage.scss';


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
       {characterPageInfo?.episode?.map((ep) => <p>{ep}</p>)}


    </div>
  )
}