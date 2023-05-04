import { Link } from "react-router-dom";
import './LocationCard.scss';

export const LocationCard = ({ location }) => {
  return (
    <Link
      to={`/rick-and-morty-gallery/location/${location.id}`}
      className="location_card"
    >
      <div className="location_card__img_container">
        <img className="location_card__img"
          src="https://overmental.com/wp-content/uploads/2015/10/rick-and-morty-calaxia.jpg"
          alt=""
        />
        <div className="location_card__name_wrapper">

      <div className="location_card__name">{location.name}</div>
        </div>
      </div>
      <div className="location_card__info_wrapper">
      <div className="location_card__info">Type: {location.type}</div>
      <div className="location_card__info">Dimension: {location.dimension}</div>
      <div className="location_card__info">Residents: {location.residents.length}</div>

      </div>
    </Link>
  );
};
