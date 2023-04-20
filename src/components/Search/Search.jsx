import { TfiSearch } from "react-icons/tfi";
import "./Search.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const Search = () => {

  const {updatePageNumber, setSearchQuery} = useContext(GalleryContext);

  const searchRequest = (e => e.preventDefault())

  

  return (
    <form className="search__form">
      <div className="search__form_container">
        <input className="search__input" type="text" placeholder="Поиск" onChange={(e) => {
    updatePageNumber(1);
    setSearchQuery(e.target.value);
  }} />
        <button className="search__button" onClick={searchRequest}>
          <TfiSearch />
        </button>
      </div>
    </form>
  );
};
