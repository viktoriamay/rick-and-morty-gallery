import './Filter.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const Filter = ({ children }) => {
  const {
    updatePageNumberCharacters,
    updatePageNumberLocations,
    updatePageNumberEpisodes,
    updateStatus,
    updateGender,
    updateSpecies,
    updateType,
    updateEpisode,
    t,
  } = useContext(GalleryContext);

  const radioButtons = document.querySelectorAll('input[type="radio"]');

  const uncheckRadioButtons = () => {
    radioButtons.forEach((radioButton) => (radioButton.checked = false));
  };

  const clearFilters = () => {
    updateStatus('');
    updateGender('');
    updateSpecies('');
    updateType('');
    updateEpisode('');
    updatePageNumberCharacters(1);
    updatePageNumberLocations(1);
    updatePageNumberEpisodes(1);
    uncheckRadioButtons();
  };

  return (
    <div>
      <h3 className="filter_form__title">{t('filters')}</h3>
      <div className="filter_form__clear_btn" onClick={clearFilters}>
        {t('clearFilters')}
      </div>
      <div className="filter_form__inputs">{children}</div>
    </div>
  );
};
