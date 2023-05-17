import { Link } from "react-router-dom";
import "./Card.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const EpisodeCard = ({ episode }) => {

  const {theme} = useContext(GalleryContext)

  const episodeImage = (episode) => {
    switch (true) {
      case episode?.episode?.includes("E01"):
        return "https://prod.assets.earlygamecdn.com/images/Fortnite-Rick-Morty-Skins.jpg?mtime=1666082993";
      case episode?.episode?.includes("E02"):
        return "https://cdn.images.express.co.uk/img/dynamic/20/750x445/1453234.jpg";
      case episode?.episode?.includes("E03"):
        return "https://www.cnet.com/a/img/resize/cd927b5d944b338b4696509ab4bfdc9be683ab50/hub/2017/09/01/def813c7-a96e-4b4d-85f7-75a8e50c1c5e/pickle-rick-2.jpg?auto=webp";
      case episode?.episode?.includes("E04"):
        return "https://variety.com/wp-content/uploads/2016/05/rick-and-morty-web.jpg?w=681&h=383&crop=1";
      case episode?.episode?.includes("E05"):
        return "https://media.comicbook.com/2021/07/rick-and-morty-promo-1275918.jpeg?auto=webp";
      case episode?.episode?.includes("E06"):
        return "https://m.media-amazon.com/images/M/MV5BYzk4ZGJmZDYtMmUxNy00NzNiLWFhZWMtNWM3NDI1ZmE4ZTk1XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_.jpg";
      case episode?.episode?.includes("E07"):
        return "https://cdn.mos.cms.futurecdn.net/PNHQ7ixVZ4kcPdJgMKQYAa.png";
      case episode?.episode?.includes("E08"):
        return "https://salesmanricks.com/wp-content/uploads/sites/2/2017/01/Screenshot-2017-01-04-22.32.27.png";
      case episode?.episode?.includes("E09"):
        return "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-image-1662104014.jpg?crop=0.751xw:1.00xh;0.135xw,0&resize=1200:*";
      case episode?.episode?.includes("E10"):
        return "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/06/Rick-and-Morty-Season-5-Episode-1-Release-Time-How-to-Watch-UK-US-compressed-1.jpg";
      default:
        return "https://cdn.mos.cms.futurecdn.net/T7XVEDX27hxmVEV7nVir5K.jpg";
    }
  };
  
  return (
    <Link to={`/episode/${episode.id}`} className={`card ${theme}`}>
      <div className="card__img_wrapper card__cover_wrapper">
        <img
          className="card__img"
          src={episodeImage(episode)}
          // src="https://prod.assets.earlygamecdn.com/images/Fortnite-Rick-Morty-Skins.jpg?mtime=1666082993"
          alt="Episode Cover"
        />
        <div className="card__cover_name_wrapper">
          <span className="card__cover_name__episode">{episode.name}</span>
        </div>
      </div>
      <div className="card__info_wrapper">
        <p className="card__name">{episode.name}</p>
        <p className={`card__info ${theme}`}>Air date: {episode.air_date}</p>
        <p className={`card__info ${theme}`}>Episode: {episode.episode}</p>
        <p className={`card__info ${theme}`}>Characters: {episode.characters.length}</p>
      </div>
    </Link>
  );
};
