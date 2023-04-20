import { useContext, useState } from "react";
import { Accordion } from "../../Accordion/Accordion";
import { FilterOptionBTN } from "../FilterOptionBTN";
import { GalleryContext } from "../../../utils/context/GalleryContext";

export const Status = () => {

  const {
    pageNumber,
    updatePageNumber,
    updateStatus,
    updateGender,
    updateSpecies,
  } = useContext(GalleryContext);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClear = () => {
    setSelectedValue(null);
  };

  let status = ["Alive", "Dead", "Unknown"];
  return (
    <>
      <Accordion title="Статус">
      {/* <button onClick={handleClear}>Сбросить</button> */}
    
        {status.map((option, index) => (
          <FilterOptionBTN
            key={`status-${index}`}
            index={index}
            name="status"
            // updateStatus={updateStatus}
            task={updateStatus}
            optionName={option} //input item
            // status={status}
            // task={option}

            // checked={selectedValue === index}
          // onChange={handleChange}
            
          />
        ))}
      </Accordion>
    </>
  );
};
