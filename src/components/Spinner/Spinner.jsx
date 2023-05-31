import './Spinner.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const Spinner = () => {
  const { theme } = useContext(GalleryContext);

  return (
    <div className="spinner">
      <div
        className={theme === 'dark' ? 'spinny-thing' : 'spinny-thing light'}
      ></div>
    </div>
  );
};
