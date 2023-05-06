import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { useLocation } from "react-router-dom";

export const Pagination = () => {
  const location = useLocation();
  const pageChange = (data) => {
    if (location.pathname === "/rick-and-morty-gallery/explore/characters") {
      updatePageNumberCharacters(data.selected + 1);
    } else if (
      location.pathname === "/rick-and-morty-gallery/explore/locations"
    ) {
      updatePageNumberLocations(data.selected + 1);
    } else if (
      location.pathname === "/rick-and-morty-gallery/explore/episodes"
    ) {
      updatePageNumberEpisodes(data.selected + 1);
    }
  };

  const paginationCount = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return infoCharacters?.pages;
      case "/rick-and-morty-gallery/explore/locations":
        return infoLocations?.pages;
      case "/rick-and-morty-gallery/explore/episodes":
        return infoEpisodes?.pages;

      default:
        return null;
    }
  };

  const paginationCurrentPage = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return pageNumberCharacters - 1;
      case "/rick-and-morty-gallery/explore/locations":
        return pageNumberLocations - 1;
      case "/rick-and-morty-gallery/explore/episodes":
        return pageNumberEpisodes - 1;

      default:
        return null;
    }
  };
  
  const paginationCountCards = (location) => {
    switch (location) {
      case "/rick-and-morty-gallery/explore/characters":
        return characters.length !== 0 && infoCharacters.count > 20;
      case "/rick-and-morty-gallery/explore/locations":
        return locations.length !== 0 && infoLocations.count > 20;
      case "/rick-and-morty-gallery/explore/episodes":
        return episodes.length !== 0 && infoEpisodes.count > 20;
      default:
        return null;
    }
  };

  const {
    infoCharacters,characters,episodes, locations,
    pageNumberEpisodes,
    infoEpisodes,
    pageNumberCharacters,
    pageNumberLocations,
    updatePageNumberLocations,
    updatePageNumberCharacters,
    updatePageNumberEpisodes,
    infoLocations,
  } = useContext(GalleryContext);
  // const [width, setWidth] = useState(window.innerWidth);
  // const updateDimensions = () => {
  //   setWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  // const pageCount = Math.ceil(info?.count / 20);

  // console.log(typeof pageCount);

  return (
    <>
      {paginationCountCards(location.pathname) && (
        <ReactPaginate
          className="pagination"
          nextLabel="Следующая"
          previousLabel="Предыдущая"
          previousClassName="pagination__nav_button"
          nextClassName="pagination__nav_button"
          activeClassName="active"
          pageClassName="pagination__page_button"
          pageLinkClassName="pagination__page_link_button"
          // marginPagesDisplayed={width < 576 ? 1 : 2}
          // pageRangeDisplayed={width < 576 ? 1 : 2}
          forcePage={paginationCurrentPage(location.pathname)}
          pageCount={paginationCount(location.pathname)}
          onPageChange={pageChange}
        />
      )}
    </>
  );
};
