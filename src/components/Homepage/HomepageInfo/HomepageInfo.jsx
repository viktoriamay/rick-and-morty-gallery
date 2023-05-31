import './HomepageInfo.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Link } from 'react-router-dom';
import RickMortyMainPage from './img/rick-and-morty-portal.png';

export const HomepageInfo = () => {
  const { t } = useContext(GalleryContext);

  return (
    <section className="homepage_info__preview container">
      <div className="homepage_info__info">
        <h1 className="homepage_info__title">{t('galleryTitle')}</h1>
        <div className="homepage_info__image mobile">
          <img src={RickMortyMainPage} alt="Rick and Morty Main Page Cover" />
        </div>
        <Link className="homepage_info__button" to="/explore">
          {t('explore')}
        </Link>
        <div className="homepage_info__statistics">
          <span className="homepage_info__statistics_count">
            826
            <span className="homepage_info__statistics_description">
              {t('charactersGalleryTitle')}
            </span>
          </span>
          <span className="homepage_info__statistics_count">
            51
            <span className="homepage_info__statistics_description">
              {t('episodesGalleryTitle')}
            </span>
          </span>
          <span className="homepage_info__statistics_count">
            126
            <span className="homepage_info__statistics_description">
              {t('locationsGalleryTitle')}
            </span>
          </span>
        </div>
      </div>
      <div className="homepage_info__image desktop">
        <img src={RickMortyMainPage} alt="RickMortyMainPage" />
      </div>
    </section>
  );
};
