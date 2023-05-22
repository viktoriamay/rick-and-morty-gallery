import { useContext } from 'react';
import './AboutRM.scss';
import { GalleryContext } from '../../utils/context/GalleryContext';
import { BackButton } from '../../components/BackButton/BackButton';

export const AboutRM = () => {
  const { t } = useContext(GalleryContext);
  return (
    <div className="about_page">
      <div className="container">
      <BackButton />
        <div className="about_page__wrapper">
          <div className="about_page__info_wrapper">
            <h1 className="about_page__title">{t('rickMortyTitle')}</h1>
            <p className="about_page__info">{t('rickMortyDescription1')}</p>
            <p className="about_page__info">{t('rickMortyDescription2')}</p>
          </div>
          <div className="about_page__img_wrapper">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/e9bcd88f-e852-4a46-af70-1da3f09ff569/orig"
              alt="Rick and Morty cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
