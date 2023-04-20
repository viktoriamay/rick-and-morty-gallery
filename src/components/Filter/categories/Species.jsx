import { useContext } from "react";
import { Accordion } from "../../Accordion/Accordion"
import { FilterOptionBTN } from "../FilterOptionBTN"
import { GalleryContext } from "../../../utils/context/GalleryContext";


export const Species = () => {

  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateGender,
    updateSpecies,
  } = useContext(GalleryContext);

  let species = [
    "Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet",
  ];
  return (
    <>
      <Accordion title="Вид">
        {species.map((option, index) => (
          <FilterOptionBTN
            key={`species-${index}`}
            index={index}
            name="species"
            optionName={option}
            task={updateSpecies}

          />
        ))}
      </Accordion> 
    </>
  )
}