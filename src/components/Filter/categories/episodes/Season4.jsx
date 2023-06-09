import { useContext } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Season4 = () => {
  const { updateEpisode, updatePageNumberEpisodes, t } =
    useContext(GalleryContext);

  let episode4 = [
    'S04E01',
    'S04E02',
    'S04E03',
    'S04E04',
    'S04E05',
    'S04E06',
    'S04E07',
    'S04E08',
    'S04E09',
    'S04E10',
  ];

  return (
    <Accordion title={`${t('season')} 4`}>
      {episode4.map((option, index) => (
        <FilterOptionBTN
          index={`${index}${option}`}
          name="season4"
          key={`season4-${index}`}
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
