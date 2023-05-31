import './Card.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NewsCardHomePage = ({ customNews }) => {
  const { theme, t } = useContext(GalleryContext);

  return (
    <Link to={`/news`} className={`homepage_news__card ${theme}`}>
      <div className="card__img_wrapper">
        <img src={customNews?.image} alt="Rick and Morty News Cover" className="card__img" />
      </div>
      <div className="card__info_wrapper card__info__news_wrapper">
        <p className="card__name card__name_location">{customNews?.title}</p>
        <span className={`news__card_text ${theme}`}>
          {customNews?.summary}
        </span>
        <span className="news__card_button">{t('newsCardButton')}</span>
      </div>
    </Link>
  );
};
