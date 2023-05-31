import './HomepageCategories.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import characters from './img/characters.png';
import locations from './img/locations.jpg';
import episodes from './img/episodes.png';

export const HomepageCategories = () => {
  const { theme, t } = useContext(GalleryContext);

  const categoriesCardsData = [
    {
      id: 'charactersData',
      image: characters,
      alt: 'Categories: characters',
      title: t('characters'),
      link: '/explore/characters',
    },
    {
      id: 'locationsData',
      image: locations,
      alt: 'Categories: locations',
      title: t('locations'),
      link: '/explore/locations',
    },
    {
      id: 'episodesData',
      image: episodes,
      alt: 'Categories: episodes',
      title: t('episodes'),
      link: '/explore/episodes',
    },
  ];

  return (
    <section className="homepage_categories">
      <div className="container">
        <h2 className="homepage__title homepage_categories__title">
          {t('categories')}
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className="homepage_categories__swiper"
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
          {categoriesCardsData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link
                to={data.link}
                className={`homepage_categories__card ${theme}`}
              >
                <div className="homepage_categories__card_img__container">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="homepage_categories__card_img"
                  />
                </div>
                <h3 className="homepage_categories__card_title">
                  {data.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
