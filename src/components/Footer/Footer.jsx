import { MainLogo } from '../MainLogo/MainLogo';
import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { MdAlternateEmail } from 'react-icons/md';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const Footer = () => {
  const { theme, t } = useContext(GalleryContext);

  const location = useLocation();

  return (
    <footer
      className={
        location.pathname === '/'
          ? `footer ${theme}`
          : `footer footer__main ${theme}`
      }
    >
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <MainLogo />
            <div className="footer__copyright">
              Made by{' '}
              <Link to="https://github.com/viktoriamay" target="_blank">
                viktoriamay
              </Link>
            </div>
          </div>
          <nav className="footer__links">
            <Link to="/about-project">{t('rmProjectLink')}</Link>
            <Link to="/about-rick-and-morty">{t('rickMortyLink')}</Link>
          </nav>
          <div className="footer__icons_wrapper">
            <Link to="https://github.com/viktoriamay" target="_blank">
              <FiGithub />
            </Link>
            <Link to="https://t.me/etern8ty" target="_blank">
              <TbBrandTelegram />
            </Link>
            <Link to="mailto:viktoriagmay@gmail.com" target="_blank">
              <MdAlternateEmail />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
