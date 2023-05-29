import { Link } from 'react-router-dom';
import './Card.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NewsCardHomePage = ({data}) => {
  const {theme, t} = useContext(GalleryContext)

  return (
    <>
    <Link to={`/news`} 
    className={`homepage_news__card ${theme}`}
    >

    <div className="card__img_wrapper">
      <img
        src={data?.image}
        alt=""
        className="card__img"
      />
    </div>
    <div className="card__info_wrapper card__info__news_wrapper">
      <p className="card__name card__name_location">
        {data?.title}
      </p>
      <span className={`news__card_text ${theme}`}>{data?.summary}</span>
      <span className="news__card_button">{t('newsCardButton')}</span>
    </div>
  </Link>
  </>

  )
}