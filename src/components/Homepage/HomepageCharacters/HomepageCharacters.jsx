import './HomepageCharacters.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { CharacterCard } from '../../Cards/CharacterCard';

// import 'swiper/swiper-bundle.css';

export const HomepageCharacters = () => {
  const { characters, t } = useContext(GalleryContext);
  const firstFive = characters.slice(0, 5);
  const secondFive = characters.slice(0, 5);
  const firstTen = firstFive.concat(secondFive).slice(0, 10);

  return (
    <section className="homepage_characters">
      <h2 className="homepage__title container">{t('mainCharacters')}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        // className='msw'
        // wrapperClass="my-swiper-wrapper"
        wrapperEl="div"
        wrapperProps={{
        style: {
          overflowY: 'visible',
          overflowX: 'hidden',
        },
      }}
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {firstTen.map((character, i) => (
          <SwiperSlide
            className="swiper-slide"
            key={`main-character-${character.id}-${i}`}
          >
            <CharacterCard className='swiper__card' character={character} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
