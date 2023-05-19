import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion";
import { FilterOptionBTN } from "../../FilterOptionBTN";
import { GalleryContext } from "../../../../utils/context/GalleryContext";

export const Season3 = () => {
  const { updateEpisode, updatePageNumberEpisodes, t } =
    useContext(GalleryContext);

  let episode3 = [
    "S03E01",
    "S03E02",
    "S03E03",
    "S03E04",
    "S03E05",
    "S03E06",
    "S03E07",
    "S03E08",
    "S03E09",
    "S03E10",
  ];

  return (
    <Accordion title={`${t('season')} 3`}>
      {episode3.map((option, index) => (
        <FilterOptionBTN
          index={`${index}${option}`}
          name="season3"
          key={`season3-${index}`}
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
