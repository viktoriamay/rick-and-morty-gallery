import './Accordion.scss';
import { useContext, useState } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const Accordion = ({ title, children }) => {
  const { theme } = useContext(GalleryContext);

  const [selected, setSelected] = useState(false);

  const toggleState = () => {
    setSelected((selected) => !selected);
  };

  return (
    <>
      <div className={selected ? 'accordion active' : 'accordion'}>
        <button className={`accordion__button ${theme}`} onClick={toggleState}>
          <h3 className={`accordion__title ${theme}`}>{title}</h3>
        </button>
        <div className={`accordion__content ${theme}`}>
          <div className={'accordion__text'}>{children}</div>
        </div>
      </div>
    </>
  );
};
