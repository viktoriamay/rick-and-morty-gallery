import { NavLink, useLocation } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./Header.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { ReactComponent as Sun } from "./img/sun.svg";
import { ReactComponent as Moon } from "./img/moon.svg";

export const Header = () => {
  const { theme, handleThemeChange, t, lang, changeLanguage } =
    useContext(GalleryContext);
  const location = useLocation();

  return (
    <header
      className={location.pathname === "/" ? `header` : `header__exp ${theme}`}
    >
      <div className="container">
        <div className="header__content">
          <MainLogo />
          <nav className="header__links">
            <NavLink to={"/explore"} className="header__link">
              {t("explore")}
            </NavLink>
            <NavLink to={"/statistics"} className="header__link">
              {t("statistics")}
            </NavLink>
            <NavLink to={"/news"} className="header__link">
              {t("news")}
            </NavLink>
          </nav>
          <div className="header__controls">
            <div onClick={() => changeLanguage()} className="header__lang">{lang === 'ru' ? 'Ru' : 'En'}</div>
            <div onClick={handleThemeChange} className="header__theme">
              {theme === "light" ? <Sun /> : <Moon />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
