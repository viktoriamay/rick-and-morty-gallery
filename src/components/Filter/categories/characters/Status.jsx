import { useContext, useState } from 'react';
import { GalleryContext } from '../../../../utils/context/GalleryContext';
import { Accordion } from '../../../Accordion/Accordion';
import { FilterOptionBTN } from '../../FilterOptionBTN';

export const Status = () => {
  const { updateStatus, updatePageNumberCharacters, t } =
    useContext(GalleryContext);

  let status = ['Alive', 'Dead', 'Unknown'];

  return (
    <Accordion title={t('status')}>
      {status.map((option, index) => (
        <FilterOptionBTN
          key={`status-${index}`}
          index={index}
          name="status"
          task={(option) => {
            updateStatus(option);
            updatePageNumberCharacters(1);
          }}
          optionName={option}
        />
      ))}
    </Accordion>
  );
};
