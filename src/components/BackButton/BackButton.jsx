import './BackButton.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const BackButton = () => {
  const { theme, t } = useContext(GalleryContext);
  const navigate = useNavigate();
  const location = useLocation();

  const pathBack = () => {
    if (location.pathname === '/explore/characters') {
      navigate(-2);
      console.log(-2);
    } else {
      navigate(-1);
      console.log(-1);
    }
  };

  return (
    <div onClick={() => pathBack()} className={`back_button ${theme}`}>
      {t('back')}
    </div>
  );
};
