import { useContext } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Type = () => {
  const { updateType, updatePageNumberLocations, t } =
    useContext(GalleryContext);

  let type = [
    'Planet',
    'Cluster',
    'Space station',
    'Microverse',
    'TV',
    'Resort',
    'Fantasy town',
    'Dream',
    'Dimension',
    'Menagerie',
    'Game',
    'Custom',
    'Daycare',
    'Spa',
    'Spacecraft',
    'Box',
    'Base',
    'Convention',
    'Death Star',
    'Arcade',
    'Non-Diegetic Alternative Reality',
    'Unknown',
  ];
  
  return (
    <Accordion title={t('type')}>
      {type.map((option, index) => (
        <FilterOptionBTN
          index={index}
          name="gender"
          key={`gender-${index}`}
          optionName={option}
          task={(option) => {
            updateType(option);
            updatePageNumberLocations(1);
          }}
        />
      ))}
    </Accordion>
  );
};
