import { useContext } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Species = () => {
  const { updateSpecies, updatePageNumberCharacters, t } =
    useContext(GalleryContext);

  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];

  return (
    <Accordion title={t('species')}>
      {species.map((option, index) => (
        <FilterOptionBTN
          key={`species-${index}`}
          index={index}
          name="species"
          optionName={option}
          task={(option) => {
            updateSpecies(option);
            updatePageNumberCharacters(1);
          }}
        />
      ))}
    </Accordion>
  );
};
