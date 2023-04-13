import { NavLink } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./Header.scss";

export const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <MainLogo />
          <nav className="header__links">
            <NavLink to={'/rick-and-morty-gallery/explore'} className='header__link'>Explore</NavLink>
            <NavLink to={'/rick-and-morty-gallery/statistics'} className='header__link'>Statistics</NavLink>
            <NavLink to={'/rick-and-morty-gallery/blog'} className='header__link'>Blog</NavLink>
          </nav>
          <div className="header__theme">
            <div>ChangeTheme</div>
          </div>
        </div>
      </div>
    </header>
  );
};
