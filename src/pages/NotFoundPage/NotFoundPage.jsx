import { Link } from 'react-router-dom';
import './NotFoundPage.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NotFoundPage = () => {
  const { t } = useContext(GalleryContext);
  return (
    <div className="container">
      <section className="not_found">
        <div className="not_found__error">404</div>
        <div className="not_found__text">{t('notFound')}</div>
        <Link to={'/'} className="homepage_info__button">
          {t('toMainPageButton')}
        </Link>
      </section>
    </div>
  );
};
