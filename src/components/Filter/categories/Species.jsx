import { Accordion } from "../../Accordion/Accordion"
import { FilterOptionBTN } from "../FilterOptionBTN"


export const Species = () => {
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
            index={index}
            name="species"
            key={`species-${index}`}
            optionName={option}
          />
        ))}
      </Accordion> 
    </>
  )
}