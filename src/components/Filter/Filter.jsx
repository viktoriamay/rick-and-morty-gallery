import { useContext } from "react";
import "./Filter.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const Filter = ({ children }) => {
  const {
    updatePageNumberCharacters,
    updatePageNumberLocations,
    updateStatus,
    updateGender,
    updateSpecies,
    updateType
  } = useContext(GalleryContext);

  const radios = document.querySelectorAll('input[type="radio"]');
  const clearF = () => {
    radios.forEach((rado) => /* console.log */ (rado.checked = false));
  };

  const clearFilters = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updateType("")
    updatePageNumberCharacters(1);
    // updatePageNumberLocations(1);
    clearF();
  };
  return (
    <div>
      <h3 className="filter_form__title">Фильтры</h3>
      <div className="filter_form__clear_btn" onClick={clearFilters}>
        Очистить фильтры
      </div>
      <div className="filter_form__inputs">
        {children}
      </div>
    </div>
  );
};
