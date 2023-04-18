import { Accordion } from "../../Accordion/Accordion";
import { FilterOptionBTN } from "../FilterOptionBTN";

export const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingOne">
    //         <button
    //           className="accordion-button" type="button"
    //           data-bs-toggle="collapse" data-bs-target="#collapseOne"
    //           aria-expanded="true" aria-controls="collapseOne"
    //         > Status </button>
    //       </h2>
    //       <div
    //   id="collapseOne" className="accordion-collapse collapse show"
    //   aria-labelledby="headingOne" data-bs-parent="#accordionExample"
    // >
    // <div className="accordion-body d-flex flex-wrap gap-3">
    //   {status.map((item, index) => (
    //     <FilterBTN
    //       key={index}
    //       index={index}
    //       name="status"
    //       // task={updateStatus}
    //       // updatePageNumber={updatePageNumber}
    //       input={item}
    //     />
    //   ))}
    // </div>
    // </div>
    //     </div>

    // <div>
    //   <button>status/accordion</button>
    //   <div className="wrapper">
    //     {status.map((option, index) => <OptionBTN index={index} name="status" optionName={option} />)}
    //   </div>
    // </div>

    <>
      <Accordion title="Статус">
        {status.map((option, index) => (
          <FilterOptionBTN
            index={index}
            name="status"
            key={`status-${index}`}
            optionName={option}
          />
        ))}
      </Accordion>
    </>
  );
};
