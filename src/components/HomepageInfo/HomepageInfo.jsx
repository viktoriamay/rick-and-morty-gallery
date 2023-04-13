import { BaseButton } from '../BaseButton/BaseButton'
import RickMortyMainPage from "./img/rick-and-morty-portal.png";
import './HomepageInfo.scss'

export const HomepageInfo = () => {
  return (
        <div className="homepage__preview">
        <div className="homepage__info">
          {/* <p className="homepage__subtitle">RICK AND MORTY</p> */}
          <h1 className="homepage__title">
            Галерея персонажей анимационного сериала Рик и Морти
          </h1>
          <BaseButton>Исследовать</BaseButton>
          <div className="homepage__statistics">
            <span className="homepage__statistics_count">
              826
              <span className="homepage__statistics_description">
                Персонажей
              </span>
            </span>
            <span className="homepage__statistics_count">
              51
              <span className="homepage__statistics_description">Эпизод</span>
            </span>
            <span className="homepage__statistics_count">
              126
              <span className="homepage__statistics_description">Локаций</span>
            </span>
          </div>
        </div>
        <div className="homepage__image">
          <img src={RickMortyMainPage} alt="RickMortyMainPage" />
        </div>
      </div>
  )
}