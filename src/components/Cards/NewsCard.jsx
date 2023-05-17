import { Link } from 'react-router-dom';
import './Card.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NewsCard = ({data}) => {
  const {theme} = useContext(GalleryContext)

  return (
    <Link to={`/news/${data?.id}`} className={`news__card ${theme}`}>
    <div className="card__img_wrapper">
      <img
        src={data?.image_url}
        alt=""
        className="card__img"
      />
    </div>
    <div className="card__info_wrapper card__info__news_wrapper">
      <p className="card__name card__name_location">
        {data?.title}
      </p>
      <span className={`news__card_text ${theme}`}>{data?.summary?.length > 140 ? `${data?.summary?.slice(0, 140).trim()}...` : data?.summary || data?.news_site}</span>
      <span className="news__card_button">Read more</span>
    </div>
  </Link>
  )
}