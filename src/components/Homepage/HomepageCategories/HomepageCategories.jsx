import './HomepageCategories.scss';
import characters from './img/characters.png';
import locations from './img/locations.jpg';
import episodes from './img/episodes.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';

export const HomepageCategories = () => {
  const { theme, t } = useContext(GalleryContext);

  return (
    <section className="homepage_categories">
      <div className="container">
        <div className="homepage_categories__cards">
          <h2 className="homepage__title homepage_categories__title">
            {t('categories')}
          </h2>
          <Link
            to="/explore/characters"
            className={`homepage_categories__card card_1 ${theme}`}
          >
            <div className="homepage_categories__card_img__container">
              <img
                src={characters}
                alt="Categories: characters"
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">
                {t('characters')}
              </span>
            </div>
          </Link>
          <Link
            to="/explore/locations"
            className={`homepage_categories__card card_2 ${theme}`}
          >
            <div className="homepage_categories__card_img__container">
              <img
                src={locations}
                alt="Categories: locations"
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">
                {t('locations')}
              </span>
            </div>
          </Link>
          <Link
            to="/explore/episodes"
            className={`homepage_categories__card card_3 ${theme}`}
          >
            <div className="homepage_categories__card_img__container">
              <img
                src={episodes}
                alt="Categories: episodes"
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">
                {t('episodes')}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
