import { GrUserManager } from "react-icons/gr";
import { RiAliensLine } from "react-icons/ri";

import "./Card.scss";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {
  const getSpeciesIcon = (species) => {
    switch (species) {
      case "Human":
        return <GrUserManager />;
      case "Alien":
        return <RiAliensLine />;
      default:
        return null;
    }
  };
  const characterStatus = (status) => {
    switch (status) {
      case "Alive":
        return "card__status_alive"
      case "Dead":
                return "card__status_dead"

      case "unknown":
                return "card__status_unknown"

      default:
        return null;
    }
  };

  const parameter = (param, name) => {
    return param === 'unknown' ? param.replace('unknown', 'Unknown') + (name) : param;
  }

  return (
    <Link
      to={`/rick-and-morty-gallery/character/${character?.id}`}
      className="card"
    >
      <div className="card__img_wrapper">
        <img
          src={character?.image}
          alt={`${character?.name}'s Avatar`}
          className="card__img"
        />
        <div className={`card__status ${characterStatus(character?.status)}`}>{character?.status}</div>
      </div>
      <div className="card__info_wrapper">
        <p className="card__name">{character?.name}</p>
        <p className="card__info">{parameter(character?.species, ' Species')}
        </p>
        <p className="card__info">{parameter(character?.gender, ' Gender')}</p>
        <p className="card__info">{parameter(character?.location?.name, ' Dimension') }</p>
      </div>
    </Link>
  );
};
