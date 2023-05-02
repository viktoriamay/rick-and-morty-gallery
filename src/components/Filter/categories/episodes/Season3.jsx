import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion";
import { FilterOptionBTN } from "../../FilterOptionBTN";
import { GalleryContext } from "../../../../utils/context/GalleryContext";

export const Season3 = () => {
  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateEpisode,
    updateSpecies,
  } = useContext(GalleryContext);

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
    <>
      <Accordion title="Season 3">
        {episode3.map((option, index) => (
          <FilterOptionBTN
            index={index}
            name="gender"
            key={`gender-${index}`}
            optionName={option}
            task={updateEpisode}
          />
        ))}
      </Accordion>
    </>
  );
};
