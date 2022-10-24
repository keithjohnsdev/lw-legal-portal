import { useState, useEffect, useRef } from "react";
import { GrayButton, default as BlueButton } from "./Buttons";
import GraydientDropdown from "./GraydientDropdown";

const FilterCodesModal = (props) => {
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

  const ref = useRef();

  function focusSearchInput() {
    ref.current.focus();
  }

  function handleChange () {
    console.log("changed");
  }

  return (
    <div>
      <div
        className={`modal-backdrop ${animateOut}`}
        onClick={props.onBackdropClick}
      ></div>
      <div className={`modal ${animateOut}`}>
        <div className="card">
          <div className="filter-modal">
            <div className="filter-codes-header">
              <p className="gray-link left" onClick={props.onBackdropClick}>
                Cancel
              </p>
              <div className="flex-header">
                <p>
                  Filter by{" "}
                  {props.name ? props.name : `Case ${props.filterField}`}
                </p>
              </div>
            </div>
            <div className="filter-bar">
              <div className="flex">
                <div className="search-div" onClick={focusSearchInput}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_219_903)">
                      <path
                        d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                        fill="#9AA0A3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_219_903">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    className="search-input"
                    placeholder="Search Codes"
                    ref={ref}
                  ></input>
                </div>
                <GraydientDropdown
                  placeholder="Category One"
                  onChange={handleChange}
                />
              </div>
              <div>
                {" "}
                <h5 className="filter blue-link">Filter</h5>
              </div>
            </div>
            <div className="filter-body">
              <h3>{props.name ? props.name : `Case ${props.filterField}`}</h3>
              <p>Select the case elements you want displayed.</p>
              {props.filterOptions.map((option, index) => {
                return (
                  <div className="filter-checkbox-div" key={index}>
                    <input type="checkbox" id={`checkbox-${index}`} />
                    <label htmlFor={`checkbox-${index}`}>
                      <p>{option}</p>
                    </label>
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

export default FilterCodesModal;
