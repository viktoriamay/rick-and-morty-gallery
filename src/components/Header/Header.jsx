import { NavLink, useLocation } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./Header.scss";

import { CgArrowsExchangeAltV } from "react-icons/cg";
import { Search } from "../Search/Search";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";


export const Header = () => {
  const {theme, handleThemeChange} = useContext(GalleryContext)
  const location = useLocation();

  
  return (
    <header className={location.pathname === '/rick-and-morty-gallery' ? `header`: `header__exp ${theme}`}>
      <div className="container">
        <div className="header__content">
          <MainLogo />
          <nav className="header__links">
            <NavLink to={'/rick-and-morty-gallery/explore'} className='header__link'>Исследовать</NavLink>
            <NavLink to={'/rick-and-morty-gallery/statistics'} className='header__link'>Статистика</NavLink>
            <NavLink to={'/rick-and-morty-gallery/news'} className='header__link'>Новости</NavLink>
          </nav>
          {/* <Search /> */}
          <div className="header__theme">
            <div onClick={handleThemeChange}><CgArrowsExchangeAltV /></div>
          </div>
        </div>
      </div>
    </header>
  );
};
