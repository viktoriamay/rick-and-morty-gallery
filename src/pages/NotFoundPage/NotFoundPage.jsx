import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const NotFoundPage = () => {
  const { t } = useContext(GalleryContext);

  return (
    <section className="not_found container">
      <div className="not_found__error">404</div>
      <div className="not_found__text">{t('notFound')}</div>
      <Link to={'/'} className="homepage_info__button">
        {t('toMainPageButton')}
      </Link>
    </section>
  );
};
