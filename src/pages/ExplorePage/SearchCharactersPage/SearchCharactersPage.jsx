import '../ExplorePage.scss';
import { useContext } from 'react';
import { CharacterCard } from '../../../components/Cards/CharacterCard';
import { Filter } from '../../../components/Filter/Filter';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Pagination } from '../../../components/Pagination/Pagination';
import { SearchInfo } from '../../../components/SearchInfo/SearchInfo';
import { Status } from '../../../components/Filter/categories/characters/Status';
import { Species } from '../../../components/Filter/categories/characters/Species';
import { Gender } from '../../../components/Filter/categories/characters/Gender';
import { Spinner } from '../../../components/Spinner/Spinner';

export const SearchCharactersPage = () => {
  const {
    characters,
    pageNumber,
    updatePageNumber,
    status,
    updateStatus,
    updateSpecies,
    updateGender,
    loading,
  } = useContext(GalleryContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="search_page__flex_container">
            <Filter
              pageNumber={pageNumber}
              status={status}
              updateStatus={updateStatus}
              updateGender={updateGender}
              updateSpecies={updateSpecies}
              updatePageNumber={updatePageNumber}
            >
              <Status />
              <Species />
              <Gender />
            </Filter>
            <div className="search_page__cards_info">
              <SearchInfo />
              <div className="search_page_cards__container">
                {characters.map((character) => (
                  <CharacterCard
                    character={character}
                    key={`character-${character.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Pagination />
        </>
      )}
    </>
  );
};
