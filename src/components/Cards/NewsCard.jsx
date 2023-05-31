import './Card.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NewsCard = ({ newsData }) => {
  const { theme, t } = useContext(GalleryContext);

  return (
    <Link to={`/news/${newsData?.id}`} className={`news__card ${theme}`}>
      <div className="card__img_wrapper">
        <img src={newsData?.image_url} alt="News Cover" className="card__img" />
      </div>
      <div className="card__info_wrapper card__info__news_wrapper">
        <p className="card__name card__name_location">{newsData?.title}</p>
        <span className={`news__card_text ${theme}`}>
          {newsData?.summary?.length > 140
            ? `${newsData?.summary?.slice(0, 140).trim()}...`
            : newsData?.summary || newsData?.news_site}
        </span>
        <span className="news__card_button">{t('newsCardButton')}</span>
      </div>
    </Link>
  );
};
