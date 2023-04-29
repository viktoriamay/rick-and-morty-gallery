import { useContext, useEffect, useState } from "react";
import { LocationCard } from "../../../components/LocationCard/LocationCard";
import RickMortyApi from "../../../utils/api/rickMortyApi";
import "../ExplorePage.scss";
import { SearchInfo } from "../../../components/SearchInfo/SearchInfo";
import { Filter } from "../../../components/Filter/Filter";
import { Type } from "../../../components/Filter/categories/locations/Type";
import useDebounce from "../../../hooks/useDebounce";
import { Pagination } from "../../../components/Pagination/Pagination";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const SearchLocationsPage = () => {

  const {infoLocations, locations} = useContext(GalleryContext)

  return (
    <>

    <div className="search_page__flex_container">
    <Filter>
    <Type />
    </Filter>
      <div className="search_page__cards_info">
      <SearchInfo />
        <div className="search_page_cards__container">
          {locations.map((location) => (
            <LocationCard location={location} />
          ))}
        </div>
      </div>
    </div>
      <Pagination infoLocations={infoLocations} />
    </>
  );
};
