import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion"
import { FilterOptionBTN } from "../../FilterOptionBTN"
import { GalleryContext } from "../../../../utils/context/GalleryContext";


export const Season1 = () => {

  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateEpisode,
    updateSpecies,
  } = useContext(GalleryContext);
  
  let episode1 = ["S01E01",
  "S01E02",
  "S01E03",
  "S01E04",
  "S01E05",
  "S01E06",
  "S01E07",
  "S01E08",
  "S01E09",
  "S01E10",
  ];
  return (
    <>
       <Accordion title="Season 1">
        {episode1.map((option, index) => (
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
  )
}