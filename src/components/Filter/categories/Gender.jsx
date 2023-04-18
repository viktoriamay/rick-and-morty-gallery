import { Accordion } from "../../Accordion/Accordion"
import { FilterOptionBTN } from "../FilterOptionBTN"


export const Gender = () => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <>
       <Accordion title="Пол">
        {genders.map((option, index) => (
          <FilterOptionBTN
            index={index}
            name="gender"
            key={`gender-${index}`}
            optionName={option}
          />
        ))}
      </Accordion>
    </>
  )
}