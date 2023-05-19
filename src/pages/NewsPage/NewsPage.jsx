import { useContext, useEffect, useState } from "react";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { NewsCard } from "../../components/Cards/NewsCard";
import ReactPaginate from "react-paginate";
import { BackButton } from "../../components/BackButton/BackButton";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const NewsPage = () => {

  const {theme, t} = useContext(GalleryContext)

  const [data, setData] = useState([]);

  const [paginated, setPaginated] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const sliced = data?.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    setPaginated(sliced);
  }, [currentPage, data, itemsPerPage, isAscending]);

  useEffect(() => {
    setPage(1);
  }, [data?.length, size]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    RickMortyApi.getPosts().then((data) => {
      setData(data.results);
    });
  }, []);


  const sortItems = () => {
    const sortedItems = data.sort((a, b) => {
      if (a.published_at < b.published_at) return isAscending ? -1 : 1;
      if (a.published_at > b.published_at) return isAscending ? 1 : -1;
      return 0;
    });
    setPaginated(sortedItems);
    setIsAscending((isAscending) => !isAscending);
  };

  return (
    <div className="container">
      <div className="sort">
        <BackButton />
        <div className="empty"></div>

        <div className={`sort__item ${theme}`}onClick={() => sortItems()}>
          {isAscending ? t('newest') : t('oldest')}
        </div>
      </div>
      <div className="news__cards">
        {paginated.map((data) => {
          return <NewsCard data={data} />;
        })}
      </div>

      <ReactPaginate
        className="pagination"
        nextLabel={t('next')}
        previousLabel={t('prev')}
        previousClassName={`pagination__nav_button pagination__color_button ${theme}`}
        nextClassName={`pagination__nav_button pagination__color_button ${theme}`}
        activeClassName="active"
        pageClassName={`pagination__page_button pagination__color_button ${theme}`}
        pageLinkClassName="pagination__page_link_button"
        // marginPagesDisplayed={width < 576 ? 1 : 2}
        // pageRangeDisplayed={width < 576 ? 1 : 2}
        forcePage={currentPage}
        initialPage={currentPage}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
