import "./HomepageCategories.scss";
import characters from "./img/characters.png";
import locations from "./img/locations.jpg";
import episodes from "./img/episodes.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const HomepageCategories = () => {
  const {theme} = useContext(GalleryContext)
  return (
    <div className="homepage_categories">
      <div className="container">
        <h2 className="homepage__title homepage_categories__title">
          Категории
        </h2>
        <div className="homepage_categories__cards">
          <Link to='/explore/characters' className={`homepage_categories__card ${theme}`}>
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
          </Link>
          <Link to='/explore/locations' className={`homepage_categories__card ${theme}`}>
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
          </Link>
          <Link to='/explore/episodes' className={`homepage_categories__card ${theme}`}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};
