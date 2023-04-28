import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const Pagination = () => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const { info, pageNumber, updatePageNumber, characters } =
    useContext(GalleryContext);
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
      {info.count > 20 && (
        <ReactPaginate
          className="pagination"
          nextLabel="Следующая"
          previousLabel="Предыдущая"
          previousClassName="pagination__nav_button"
          nextClassName="pagination__nav_button"
          activeClassName="active"
          pageClassName="pagination__page_button"
          pageLinkClassName="pagination__page_link_button"
          // forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          forcePage={pageNumber <= 1 ? 0 : pageNumber - 1}
          // forcePage={pageNumber - 1}
          // marginPagesDisplayed={width < 576 ? 1 : 2}
          // pageRangeDisplayed={width < 576 ? 1 : 2}

          pageCount={info?.pages}
          // pageCount={pageCount}
          onPageChange={pageChange}

          // pageRangeDisplayed={1}
          // marginPagesDisplayed={1}
          //.... other props here
        />
      )}
    </>
  );
};
