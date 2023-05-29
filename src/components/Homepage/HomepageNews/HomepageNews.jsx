import { useContext } from 'react';
import './HomepageNews.scss';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../HomepageCharacters/HomepageCharacters.scss';
import { CharacterCard } from '../../Cards/CharacterCard';
import { NewsCardHomePage } from '../../Cards/NewsCardHomePage';
import { Link } from 'react-router-dom';
import 'swiper/scss';


export const HomepageNews = () => {
  const { t, theme } = useContext(GalleryContext);
  const data = [
    {
      image:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Rick--Morty-Season-6EWKSF-feature.jpg',
      title: t('homepageNews.newsCard1.title'),
      summary: t('homepageNews.newsCard1.summary'),
    },
    {
      image:
        'https://www.thepinknews.com/wp-content/uploads/2021/06/Rick-and-Morty.jpg',
      title: t('homepageNews.newsCard2.title'),
      summary: t('homepageNews.newsCard2.summary'),
    },
    {
      image:
        'https://media.cdn.adultswim.com/uploads/20200313/thumbnails/2_203131431165-rickandmorty_001_dup-20140314.jpg',
      title: t('homepageNews.newsCard3.title'),
      summary: t('homepageNews.newsCard3.summary'),
    },
  ];

  return (
    <section className="homepage_news">
      <h2 className="homepage__title container">{t('news')}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="mysw"
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
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 30,
          // },
        }}
      >
        {data.map((data) => (
          <SwiperSlide 
          // className={`swiper-slide`}
          >
            
              <NewsCardHomePage data={data} />{' '}
          </SwiperSlide>
        ))}
        
        
        
       

        {/* <SwiperSlide className="swiper-slide">
          <NewsCardHomePage data={data} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <NewsCardHomePage data={data} />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};
