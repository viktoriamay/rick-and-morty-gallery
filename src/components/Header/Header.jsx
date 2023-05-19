import { NavLink, useLocation } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./Header.scss";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { useContext, useState } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const Header = () => {
  const { theme, handleThemeChange, t, lang,changeLanguage } = useContext(GalleryContext);
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
          <div className="header__theme">
      <div onClick={() => changeLanguage()}>{lang}</div>
            <div onClick={handleThemeChange}>
              <CgArrowsExchangeAltV />

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
