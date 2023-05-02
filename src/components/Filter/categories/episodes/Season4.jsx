import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion"
import { FilterOptionBTN } from "../../FilterOptionBTN"
import { GalleryContext } from "../../../../utils/context/GalleryContext";


export const Season4 = () => {

  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateEpisode,
    updateSpecies,
  } = useContext(GalleryContext);
  
  let episode4 = ["S01E01",
  
  "S04E01",
  "S04E02",
  "S04E03",
  "S04E04",
  "S04E05",
  "S04E06",
  "S04E07",
  "S04E08",
  "S04E09",
  "S04E10",
  ];
  return (
    <>
       <Accordion title="Season 4">
        {episode4.map((option, index) => (
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