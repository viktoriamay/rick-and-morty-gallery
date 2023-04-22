import { useContext, useEffect, useState } from "react";
import { CharacterCard } from "../../../components/CharacterCard/CharacterCard";
import { Filter } from "../../../components/Filter/Filter";
import { GalleryContext } from "../../../utils/context/GalleryContext";
import { Pagination } from "../../../components/Pagination/Pagination";
import { SearchInfo } from "../../../components/SearchInfo/SearchInfo";

export const SearchCharactersPage = () => {
  const {
    characters,
    info,
    pageNumber,
    updatePageNumber,
    status,
    updateStatus,
    updateSpecies,
    updateGender,
  } = useContext(GalleryContext);

  return (
    <>
      <div className="scp">
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
        <div>
          <SearchInfo />
          <div className="characters_cards__container">
            {characters.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};
