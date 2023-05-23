import { useContext } from 'react';
import { CharacterCard } from '../../Cards/CharacterCard';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomepageCharacters.scss';
import 'swiper/scss';

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
            <CharacterCard character={character} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
