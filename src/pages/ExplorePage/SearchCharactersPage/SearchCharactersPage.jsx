import { useContext, useEffect, useState } from "react";
import { CharacterCard } from "../../../components/CharacterCard/CharacterCard";
import { Filter } from "../../../components/Filter/Filter";
import { GalleryContext } from "../../../utils/context/GalleryContext";
import { Pagination } from "../../../components/Pagination/Pagination";

export const SearchCharactersPage = () => {
  const { characters, info, pageNumber, updatePageNumber } =
    useContext(GalleryContext);

  return (
    <div>

    <div className="scp">
      <div>
        <Filter />
      </div>
      <div className="characters_cards__container">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};
