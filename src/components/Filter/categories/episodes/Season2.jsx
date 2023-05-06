import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion";
import { FilterOptionBTN } from "../../FilterOptionBTN";
import { GalleryContext } from "../../../../utils/context/GalleryContext";

export const Season2 = () => {
  const { updateEpisode, updatePageNumberEpisodes } =
    useContext(GalleryContext);

  let episode2 = [
    "S02E01",
    "S02E02",
    "S02E03",
    "S02E04",
    "S02E05",
    "S02E06",
    "S02E07",
    "S02E08",
    "S02E09",
    "S02E10",
  ];

  return (
    <Accordion title="Season 2">
      {episode2.map((option, index) => (
        <FilterOptionBTN
          index={`${index}${option}`}
          name="season2"
          key={`season2-${index}`}
          optionName={option}
          task={(option) => {
            updateEpisode(option);
            updatePageNumberEpisodes(1);
          }}
        />
      ))}
    </Accordion>
  );
};
