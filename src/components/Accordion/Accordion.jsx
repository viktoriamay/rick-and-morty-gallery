import { useState } from "react";
import './Accordion.scss'

export const Accordion = ({title, children}) => {

  const [selected, setSelected] = useState(false);

  const toggleState = () => {
    setSelected(selected => !selected);
  }
  return (
    <>
      <div className={selected ? "accordion active" : "accordion"}>
        <button className={"accordion__button"} onClick={toggleState}>
          <h3 className="accordion__title">{title}</h3>
        </button>
        <div className={"accordion__content"}>
          <div className={"accordion__text"}>{children}</div>
        </div>
      </div>
    </>
  );
};
