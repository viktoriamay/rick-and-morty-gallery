import { useContext } from "react";
import { Accordion } from "../../../Accordion/Accordion";
import { FilterOptionBTN } from "../../FilterOptionBTN";
import { GalleryContext } from "../../../../utils/context/GalleryContext";

export const Gender = () => {
  const { updateGender, updatePageNumberCharacters } =
    useContext(GalleryContext);
  let gender = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <>
      <Accordion title="Пол">
        {gender.map((option, index) => (
          <FilterOptionBTN
            index={index}
            name="gender"
            key={`gender-${index}`}
            optionName={option}
            task={(option) => {
              updateGender(option);
              updatePageNumberCharacters(1);
            }}
          />
        ))}
      </Accordion>
    </>
  );
};
