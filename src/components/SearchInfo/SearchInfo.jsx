import { useContext } from "react";
import "./SearchInfo.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const SearchInfo = () => {
  const { searchQuery, status, gender, species, infoCharacters, characters } =
    useContext(GalleryContext);

  return (
    <>
      {(searchQuery || status || gender || species) &&
        characters?.length !== 0 && (
          <div className="search_info">
            По запросу <span className="search_info__request"> {searchQuery}</span> найдено
            персонажей: <span className="search_info__request">{infoCharacters?.count}</span>
            
          </div>
        )}
      {characters?.length === 0 && (
        <div className="search_info">По запросу <span className="search_info__request"> {searchQuery}</span> ничего не найдено</div>
      )}
    </>
  );
};
