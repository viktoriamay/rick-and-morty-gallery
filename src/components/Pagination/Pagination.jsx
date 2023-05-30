import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { useLocation } from "react-router-dom";

export const Pagination = () => {

  const {
    infoCharacters,characters,episodes, locations,
    pageNumberEpisodes,
    infoEpisodes,
    pageNumberCharacters,
    pageNumberLocations,
    updatePageNumberLocations,
    updatePageNumberCharacters,
    updatePageNumberEpisodes,
    infoLocations, theme, t
  } = useContext(GalleryContext);

  const location = useLocation();
  const pageChange = (data) => {
    if (location.pathname === "/explore/characters") {
      updatePageNumberCharacters(data.selected + 1);
    } else if (
      location.pathname === "/explore/locations"
    ) {
      updatePageNumberLocations(data.selected + 1);
    } else if (
      location.pathname === "/explore/episodes"
    ) {
      updatePageNumberEpisodes(data.selected + 1);
    }
  };

  const paginationCount = (location) => {
    switch (location) {
      case "/explore/characters":
        return infoCharacters?.pages;
      case "/explore/locations":
        return infoLocations?.pages;
      case "/explore/episodes":
        return infoEpisodes?.pages;

      default:
        return null;
    }
  };

  const paginationCurrentPage = (location) => {
    switch (location) {
      case "/explore/characters":
        return pageNumberCharacters - 1;
      case "/explore/locations":
        return pageNumberLocations - 1;
      case "/explore/episodes":
        return pageNumberEpisodes - 1;

      default:
        return null;
    }
  };
  
  const paginationCountCards = (location) => {
    switch (location) {
      case "/explore/characters":
        return characters.length !== 0 && infoCharacters.count > 20;
      case "/explore/locations":
        return locations.length !== 0 && infoLocations.count > 20;
      case "/explore/episodes":
        return episodes.length !== 0 && infoEpisodes.count > 20;
      default:
        return null;
    }
  };

  
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // const pageCount = Math.ceil(info?.count / 20);

  // console.log(typeof pageCount);

  return (
    <>
      {paginationCountCards(location.pathname) && (
        <ReactPaginate
          className="pagination"
          nextLabel={t('next')}
          previousLabel={t('prev')}
          previousClassName={`pagination__nav_button pagination__color_button ${theme}`}
          nextClassName={`pagination__nav_button pagination__color_button ${theme}`}
          activeClassName="active"
          pageClassName={`pagination__page_button pagination__color_button ${theme}`}
          pageLinkClassName="pagination__page_link_button"
          marginPagesDisplayed={width < 750 ? 1 : 2}
          pageRangeDisplayed={width < 750 ? 1 : 2}
          forcePage={paginationCurrentPage(location.pathname)}
          pageCount={paginationCount(location.pathname)}
          onPageChange={pageChange}
        />
      )}
    </>
  );
};
