import { useContext, useEffect, useState } from "react";
import { CharacterCard } from "../../../components/CharacterCard/CharacterCard";
import { Filter } from "../../../components/Filter/Filter";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const SearchCharactersPage = () => { 

  const {characters} = useContext(GalleryContext)

  return (
    <div className="scp">
      <div><Filter/> </div>
      <div className="characters_cards__container">
      {characters.map((character) => <CharacterCard character={character} key={character.id} /> )}
      </div>
    </div>
  );
};
