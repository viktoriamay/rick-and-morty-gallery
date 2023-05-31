import './Header.scss';
import { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GalleryContext } from '../../utils/context/GalleryContext';
import { MainLogo } from '../MainLogo/MainLogo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ReactComponent as Sun } from './img/sun.svg';
import { ReactComponent as Moon } from './img/moon.svg';

export const Header = () => {
  const { theme, handleThemeChange, t, lang, changeLanguage } =
    useContext(GalleryContext);

  const location = useLocation();

  const [activeBurger, setActiveBurger] = useState(false);

  const toggleBurger = () => {
    setActiveBurger((activeBurger) => !activeBurger);
  };

  return (
    <header
      className={location.pathname === '/' ? `header` : `header__exp ${theme}`}
    >
      <div className="container">
        <div className="header__content">
          <MainLogo />
          <nav>
            <ul
              className={
                activeBurger ? 'header__links active' : 'header__links'
              }
            >
              <li>
                <NavLink
                  onClick={() => setActiveBurger(false)}
                  to={'/explore'}
                  className={
                    theme === 'light' ? 'header__link light' : 'header__link'
                  }
                >
                  {t('explore')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setActiveBurger(false)}
                  to={'/statistics'}
                  className={
                    theme === 'light' ? 'header__link light' : 'header__link'
                  }
                >
                  {t('statistics')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setActiveBurger(false)}
                  to={'/news'}
                  className={
                    theme === 'light' ? 'header__link light' : 'header__link'
                  }
                >
                  {t('news')}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            className={
              activeBurger ? 'header__controls active' : 'header__controls'
            }
          >
            <div
              onClick={() => changeLanguage()}
              className={
                theme === 'light' ? 'header__lang light' : 'header__lang'
              }
            >
              {lang === 'ru' ? 'Ru' : 'En'}
            </div>
            <div onClick={handleThemeChange} className="header__theme">
              {theme === 'light' ? <Sun className="header__sun" /> : <Moon className="header__moon" />}
            </div>
          </div>
          <BurgerMenu
            onClick={() => toggleBurger()}
            activeBurger={activeBurger}
          />
        </div>
      </div>
    </header>
  );
};
