import { useContext } from "react";
import { GalleryContext } from "../../../utils/context/GalleryContext";
import { EpisodeCard } from "../../../components/Cards/EpisodeCard";
import { Filter } from "../../../components/Filter/Filter";
import { SearchInfo } from "../../../components/SearchInfo/SearchInfo";
import { Pagination } from "../../../components/Pagination/Pagination";
import {
  Episode,
  Season1,
} from "../../../components/Filter/categories/episodes/Season1";
import { Season2 } from "../../../components/Filter/categories/episodes/Season2";
import { Season3 } from "../../../components/Filter/categories/episodes/Season3";
import { Season4 } from "../../../components/Filter/categories/episodes/Season4";
import { Season5 } from "../../../components/Filter/categories/episodes/Season5";

export const SearchEpisodesPage = () => {
  const { episodes } = useContext(GalleryContext);
  return (
    <>
      <div className="search_page__flex_container">
        <Filter>
          <Season1 />
          {/* <Season2 /> */}
          {/* <Season3 /> */}
          {/* <Season4 /> */}
          {/* <Season5 /> */}
        </Filter>
        <div className="search_page__cards_info">
          <SearchInfo />
          <div className="search_page_cards__container">
            {episodes.map((episode) => (
              <EpisodeCard episode={episode} />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};
