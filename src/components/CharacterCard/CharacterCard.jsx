import './CharacterCard.scss'

export const CharacterCard = () => {
  return (
    <div className="character__card">
      <div className="character__card_img_wrapper">
        <img
          src="https://www.nme.com/wp-content/uploads/2022/10/Rick_And_Morty_Portal_Gun_JuRicksic_Mort.jpg"
          alt=""
          className="character__card_img"
        />
      </div>
      <div className="character__info_wrapper">
      <div className="wrappper">

        <p className="character__card_name">Rick Sanchez</p>
      </div>
        <span className="character__card_about">Human</span>
        <span className="character__card_about">Male</span>
        <span className="character__card_about">Earth</span>
      </div>
    </div>
  );
};
