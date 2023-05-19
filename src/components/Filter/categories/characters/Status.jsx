import { useContext, useState } from "react";
import { Accordion } from "../../../Accordion/Accordion"

import { FilterOptionBTN } from "../../FilterOptionBTN";
import { GalleryContext } from "../../../../utils/context/GalleryContext";

export const Status = () => {

  const {
    updateStatus,updatePageNumberCharacters,t
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
      <Accordion title={t('status')}>
        {status.map((option, index) => (
          <FilterOptionBTN
            key={`status-${index}`}
            index={index}
            name="status"
            // updateStatus={updateStatus}
            task={(option) => {
              updateStatus(option);
    updatePageNumberCharacters(1);
  }}
            optionName={option} //input item
            // status={status}
            // task={option}

            // checked={selectedValue === index}
          // onChange={handleChange}
            
          />
        ))}
      </Accordion>
  );
};
