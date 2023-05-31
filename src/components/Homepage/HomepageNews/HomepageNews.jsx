import './HomepageNews.scss';
import '../HomepageCharacters/HomepageCharacters.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { NewsCardHomePage } from '../../Cards/NewsCardHomePage';

export const HomepageNews = () => {
  const { t } = useContext(GalleryContext);
  const customNewsData = [
    {
      image:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Rick--Morty-Season-6EWKSF-feature.jpg',
      title: t('homepageNews.newsCard1.title'),
      summary: t('homepageNews.newsCard1.summary'),
      id: 'news1',
    },
    {
      image:
        'https://www.thepinknews.com/wp-content/uploads/2021/06/Rick-and-Morty.jpg',
      title: t('homepageNews.newsCard2.title'),
      summary: t('homepageNews.newsCard2.summary'),
      id: 'news2',
    },
    {
      image:
        'https://media.cdn.adultswim.com/uploads/20200313/thumbnails/2_203131431165-rickandmorty_001_dup-20140314.jpg',
      title: t('homepageNews.newsCard3.title'),
      summary: t('homepageNews.newsCard3.summary'),
      id: 'news3',
    },
  ];

  return (
    <section className="homepage_news">
      <h2 className="homepage__title container">{t('news')}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="homepage_news__swiper"
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          310: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {customNewsData.map((customNews) => (
          <SwiperSlide key={customNews.id}>
            <NewsCardHomePage customNews={customNews} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
