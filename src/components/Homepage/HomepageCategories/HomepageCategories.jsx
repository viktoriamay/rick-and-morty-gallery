import "./HomepageCategories.scss";
import characters from "./img/characters.png";
import locations from "./img/locations.jpg";
import episodes from "./img/episodes.png";

export const HomepageCategories = () => {
  return (
    <div className="homepage_categories">
      <div className="container">
        <h2 className="homepage__title homepage_categories__title">
          Категории
        </h2>
        <div className="homepage_categories__cards">
          <div className="homepage_categories__card">
            <div className="homepage_categories__card_img__container">
              <img
                src={characters}
                alt=""
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">Персонажи</span>
            </div>
          </div>
          <div className="homepage_categories__card">
            <div className="homepage_categories__card_img__container">
              <img
                src={locations}
                alt=""
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">Локации</span>
            </div>
          </div>
          <div className="homepage_categories__card">
            <div className="homepage_categories__card_img__container">
              <img
                src={episodes}
                alt=""
                className="homepage_categories__card_img"
              />
            </div>
            <div className="homepage_categories__card_title__wrapper">
              <span className="homepage_categories__card_title">Эпизоды</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
