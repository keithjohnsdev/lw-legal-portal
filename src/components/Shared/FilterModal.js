import { useState, useEffect } from "react";
import { GrayButton, default as BlueButton } from "./Buttons";

const FilterModal = (props) => {
  const [animateOut, setAnimateOut] = useState("out kill");
  useEffect(() => {
    if (props.show) {
      setAnimateOut("");
    } else if (!props.show) {
      if (animateOut === "out kill") {
        // if already out, stays out, avoiding unnecessary mounting/animating on first render
      } else {
        setAnimateOut("out");
        setTimeout(() => {
          setAnimateOut("out kill");
        }, 300);
      }
    }
  }, [props.show]);

  return (
    <div>
      <div
        className={`modal-backdrop ${animateOut}`}
        onClick={props.onBackdropClick}
      ></div>
      <div className={`modal ${animateOut}`}>
        <div className="card">
          <div className="filter-modal">
            <div className="filter-header">
              <p>Filter by { props.name ? props.name : `Case ${props.filterField}`}</p>
              <div className="x-div" onClick={props.onBackdropClick}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15L15 1M15 15L1 1"
                    stroke="#73787B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="filter-body">
              <h3>{props.name ? props.name : `Case ${props.filterField}`}</h3>
              <p>Select the case elements you want displayed.</p>
              {props.filterOptions.map((option, index) => {
                return (
                  <div className="filter-checkbox-div" key={index}>
                    <input type="checkbox" id={`checkbox-${index}`}/>
                    <label htmlFor={`checkbox-${index}`}><p>{option}</p></label>
                  </div>
                );
              })}
            </div>
            <div className="filter-footer">
              <GrayButton onClick={props.onBackdropClick}>Cancel</GrayButton>
              <BlueButton onClick={props.onBackdropClick}>Done</BlueButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
