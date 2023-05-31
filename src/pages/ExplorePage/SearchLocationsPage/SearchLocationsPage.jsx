import '../ExplorePage.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../../utils/context/GalleryContext';
import { LocationCard } from '../../../components/Cards/LocationCard';
import { SearchInfo } from '../../../components/SearchInfo/SearchInfo';
import { Filter } from '../../../components/Filter/Filter';
import { Type } from '../../../components/Filter/categories/locations/Type';
import { Pagination } from '../../../components/Pagination/Pagination';
import { Spinner } from '../../../components/Spinner/Spinner';

export const SearchLocationsPage = () => {
  const { infoLocations, locations, loading } = useContext(GalleryContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="search_page__flex_container">
            <Filter>
              <Type />
            </Filter>
            <div className="search_page__cards_info">
              <SearchInfo />
              <div className="search_page_cards__container">
                {locations.map((location) => (
                  <LocationCard
                    location={location}
                    key={`location-${location.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Pagination infoLocations={infoLocations} />
        </>
      )}
    </>
  );
};
