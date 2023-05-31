import { useContext } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Season1 = () => {
  const { updateEpisode, updatePageNumberEpisodes, t } =
    useContext(GalleryContext);

  let episode1 = [
    'S01E01',
    'S01E02',
    'S01E03',
    'S01E04',
    'S01E05',
    'S01E06',
    'S01E07',
    'S01E08',
    'S01E09',
    'S01E10',
    'S01E11',
  ];

  return (
    <Accordion title={`${t('season')} 1`}>
      {episode1.map((option, index) => (
        <FilterOptionBTN
          index={`${index}${option}`}
          name="season1"
          key={`season1-${index}`}
          optionName={option}
          task={(option) => {
            updateEpisode(option);
            updatePageNumberEpisodes(1);
          }}
        />
      ))}
    </Accordion>
  );
};
