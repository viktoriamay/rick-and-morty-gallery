import RickMortyMainPage from "./img/rick-and-morty-portal.png";
import "./HomepageInfo.scss";
import { BaseButton } from "./../../BaseButton/BaseButton";

export const HomepageInfo = () => {
  return (
    <div className="container">
      <div className="homepage_info__preview">
        <div className="homepage_info__info">
          {/* <p className="homepage_info__subtitle">RICK AND MORTY</p> */}
          <h1 className="homepage_info__title">
            Галерея персонажей анимационного сериала Рик и Морти
          </h1>
          <BaseButton>Исследовать</BaseButton>
          <div className="homepage_info__statistics">
            <span className="homepage_info__statistics_count">
              826
              <span className="homepage_info__statistics_description">
                Персонажей
              </span>
            </span>
            <span className="homepage_info__statistics_count">
              51
              <span className="homepage_info__statistics_description">
                Эпизод
              </span>
            </span>
            <span className="homepage_info__statistics_count">
              126
              <span className="homepage_info__statistics_description">
                Локаций
              </span>
            </span>
          </div>
        </div>
        <div className="homepage_info__image">
          <img src={RickMortyMainPage} alt="RickMortyMainPage" />
        </div>
      </div>
    </div>
  );
};
