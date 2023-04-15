import { CharacterCard } from "../../CharacterCard/CharacterCard";
import "./HomepageCharacters.scss";

export const HomepageCharacters = () => {
  return (
    <div className="container">
      <div className="homepage_characters">
        <h2 className="homepage__title">Главные персонажи</h2>
        <div className="homepage_characters__cards">
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
    </div>
  );
};
