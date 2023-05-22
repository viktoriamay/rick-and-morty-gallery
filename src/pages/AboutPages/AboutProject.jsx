import { useContext } from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import './AboutPages.scss';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const AboutProject = () => {
  const { t } = useContext(GalleryContext);
  return (
    <div className="about_page">
      <div className="container">
        <BackButton />
        <div className="about_page__info_wrapper">
          <h1 className="about_page__title">{t('rmProject')}</h1>
          <p className="about_page__info">{t('rmProjectInfo.info1')}</p>
          <p className="about_page__info">{t('rmProjectInfo.info2')}</p>
          <p className="about_page__info">{t('rmProjectInfo.info3')}</p>
          <p className="about_page__info">{t('rmProjectInfo.info4')}</p>
          <h2 className='about_page__subtitle'>{t('rmProjectInfo.technologies.techTitle')}</h2>
          <ul className='about_page__list'>
            <li className='about_page__list_item'>{t('rmProjectInfo.technologies.tech1')}</li>
            <li className='about_page__list_item'>React-router-dom (BrowserRouter, Routes, Route)</li>
            <li className='about_page__list_item'>REST API</li>
            <li className='about_page__list_item'>JavaScript (JSX)</li>
            <li className='about_page__list_item'>Props, context</li>
            <li className='about_page__list_item'>SCSS</li>
            <li className='about_page__list_item'>Apache ECharts</li>
            <li className='about_page__list_item'>Git, GitHub</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.technologies.tech2')}</li>
          </ul>
          <h2 className='about_page__subtitle'>{t('rmProjectInfo.functions.funcTitle')}</h2>
          <ul className='about_page__list'>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func1')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func2')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func3')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func4')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func5')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func6')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func7')}</li>
            <li className='about_page__list_item'>{t('rmProjectInfo.functions.func8')}</li>
          </ul>
          <p className="about_page__info">{t('rmProjectInfo.info5')}</p>
        </div>
      </div>
    </div>
  );
};
