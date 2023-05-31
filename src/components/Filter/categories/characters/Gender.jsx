import { useContext } from 'react';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';
import { GalleryContext } from '../../../../utils/context/GalleryContext';

export const Gender = () => {
  const { updateGender, updatePageNumberCharacters, t } =
    useContext(GalleryContext);
  let gender = ['Female', 'Male', 'Genderless', 'Unknown'];

  return (
    <Accordion title={t('gender')}>
      {gender.map((option, index) => (
        <FilterOptionBTN
          index={index}
          name="gender"
          key={`gender-${index}`}
          optionName={option}
          task={(option) => {
            updateGender(option);
            updatePageNumberCharacters(1);
          }}
        />
      ))}
    </Accordion>
  );
};
