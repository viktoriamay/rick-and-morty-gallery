import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion"
import { FilterOptionBTN } from "../../FilterOptionBTN"
import { GalleryContext } from "../../../../utils/context/GalleryContext";


export const Season5 = () => {

  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateEpisode,
    updateSpecies,
  } = useContext(GalleryContext);
  
  let episode5 = [
  "S05E01",
  "S05E02",
  "S05E03",
  "S05E04",
  "S05E05",
  "S05E06",
  "S05E07",
  "S05E08",
  "S05E09",
  "S05E10"];
  return (
    <>
       <Accordion title="Season 5">
        {episode5.map((option, index) => (
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