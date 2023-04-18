import "./CharacterCard.scss";

export const CharacterCard = ({ character }) => {
  return (
    <div className="character__card">
      <div className="character__card_img_wrapper">
        <img src={character?.image} alt="" className="character__card_img" />
        {/* <img
          src="https://www.nme.com/wp-content/uploads/2022/10/Rick_And_Morty_Portal_Gun_JuRicksic_Mort.jpg"
          alt=""
          className="character__card_img"
        /> */}
      </div>
      <div className="character__info_wrapper">
        <div className="wrappper">
          <p className="character__card_name">
            {character?.name.length > 18
              ? `${character?.name.slice(0, 18)}...`
              : character?.name}
          </p>
        </div>
        <span className="character__card_about">{character?.species}</span>
        <span className="character__card_about">{character?.gender}</span>
        <span className="character__card_about">
          {character?.location.name.length > 25
            ? `${character?.location.name.slice(0, 25)}...`
            : character?.location.name}
        </span>
      </div>
    </div>
  );
};
