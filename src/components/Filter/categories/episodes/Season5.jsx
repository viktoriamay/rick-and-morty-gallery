import { useContext } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Season5 = () => {
  const { updateEpisode, updatePageNumberEpisodes, t } =
    useContext(GalleryContext);

  let episode5 = [
    'S05E01',
    'S05E02',
    'S05E03',
    'S05E04',
    'S05E05',
    'S05E06',
    'S05E07',
    'S05E08',
    'S05E09',
    'S05E10',
  ];

  return (
    <Accordion title={`${t('season')} 5`}>
      {episode5.map((option, index) => (
        <FilterOptionBTN
          index={`${index}${option}`}
          name="season5"
          key={`season5-${index}`}
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
