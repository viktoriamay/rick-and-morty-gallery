import { Link } from "react-router-dom";
import './EpisodeCard.scss';

export const EpisodeCard = ({ episode }) => {
  return (

    <Link
      to={`/rick-and-morty-gallery/episode/${episode.id}`}
      className="episode_card"
    >
      <div className="episode_card__img_container">
        <img className="episode_card__img"
          src="https://prod.assets.earlygamecdn.com/images/Fortnite-Rick-Morty-Skins.jpg?mtime=1666082993"
          alt=""
        />
        <div className="episode_card__name_wrapper">

      <div className="episode_card__name">{episode.name}</div>
        </div>
      </div>
      <div className="episode_card__info_wrapper">
      <div className="episode_card__info__name">{episode.name}</div>

      <div className="episode_card__info">Air date: {episode.air_date}</div>
      <div className="episode_card__info">Episode: {episode.episode}</div>
      <div className="episode_card__info">Characters: {episode.characters.length}</div>

      </div>
    </Link>
  );
};
