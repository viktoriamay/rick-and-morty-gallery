import { TfiSearch } from "react-icons/tfi";
import "./Search.scss";

export const Search = () => {
  return (
    <form className="search__form">
      <div className="search__form_container">
        <input className="search__input" type="text" placeholder="Поиск" />
        <button className="search__button">
          <TfiSearch />
        </button>
      </div>
    </form>
  );
};
