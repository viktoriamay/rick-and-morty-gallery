import RickMortyMainPage from "./img/rick-and-morty-portal.png";
import "./HomepageInfo.scss";
import { BaseButton } from "./../../BaseButton/BaseButton";
import { useContext } from "react";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const HomepageInfo = () => {

  const {t} = useContext(GalleryContext);
  return (
    <div className="container">
      <div className="homepage_info__preview">
        <div className="homepage_info__info">
          <h1 className="homepage_info__title">
            {t('galleryTitle')}
          </h1>
          <BaseButton>{t('explore')}</BaseButton>
          <div className="homepage_info__statistics">
            <span className="homepage_info__statistics_count">
              826
              <span className="homepage_info__statistics_description">
              {t('charactersGalleryTitle')}
              </span>
            </span>
            <span className="homepage_info__statistics_count">
              51
              <span className="homepage_info__statistics_description">
              {t('episodesGalleryTitle')}
              </span>
            </span>
            <span className="homepage_info__statistics_count">
              126
              <span className="homepage_info__statistics_description">
              {t('locationsGalleryTitle')}
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
