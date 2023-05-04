import { useContext } from "react";
import { CharacterCard } from "../../Cards/CharacterCard";
import "./HomepageCharacters.scss";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const HomepageCharacters = () => {

  const {characters} = useContext(GalleryContext)
  return (
    <div className="container">
      <div className="homepage_characters">
        <h2 className="homepage__title">Главные персонажи</h2>
        <div className="homepage_characters__cards">
        {characters.map((character) => <CharacterCard character={character} key={character.id} />).slice(0, 5)}
        </div>
      </div>
    </div>
  );
};
